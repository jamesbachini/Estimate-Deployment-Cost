const fs = require('fs');
const ethers = require('ethers');
const axios = require('axios');
const solc = require('solc');

const provider = new ethers.JsonRpcProvider('https://cloudflare-eth.com');

async function getEthPrice() {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
    return response.data.ethereum.usd;
}

async function estimateDeploymentCost(contractPath) {
    const source = fs.readFileSync(contractPath, 'utf8');
    const input = { language: 'Solidity', sources: { 'contract.sol': { content: source, }, }, settings: { outputSelection: { '*': { '*': ['*'], }, }, }, };
    const output = JSON.parse(solc.compile(JSON.stringify(input)));
    const contract = output.contracts['contract.sol'][Object.keys(output.contracts['contract.sol'])[0]];
    const bytecode = contract.evm.bytecode.object;
    const deployTransaction = { data: '0x' + bytecode };
    const estimatedGasUnits = await provider.estimateGas(deployTransaction);
    const feeData = await provider.getFeeData();
    const gasPrice = feeData.gasPrice;
    const priorityFee = feeData.maxPriorityFeePerGas;
    const ethPriceUsd = await getEthPrice();
    const effectiveGasPrice = gasPrice + priorityFee;
    const gasCost = effectiveGasPrice * estimatedGasUnits;
    const estimatedCostEth = ethers.formatEther(gasCost);
    const estimatedCostUsd = parseFloat(estimatedCostEth) * ethPriceUsd;
    console.log(`Estimated Gas Units: ${estimatedGasUnits.toString()}`);
    console.log(`Gas Price: ${ethers.formatUnits(gasPrice, 'gwei')} gwei`);
    console.log(`Priority Fee: ${ethers.formatUnits(priorityFee, 'gwei')} gwei`);
    console.log(`ETH Price: $${ethPriceUsd} USD`);
    console.log(`Estimated Deployment Cost: ${estimatedCostEth} ETH (~$${estimatedCostUsd.toFixed(2)} USD)`);
}

const contractPath = process.argv[2];
if (!contractPath) throw new Error('No path to the compiled contract file');
estimateDeploymentCost(contractPath);