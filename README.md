# Solidity Contract Deployment Cost Estimator

This repository contains a Node.js script to estimate the cost of deploying a Solidity smart contract on the Ethereum blockchain. The script uses `ethers.js` to interact with the Ethereum network, `solc` for Solidity compilation, and `axios` to fetch the current price of Ethereum in USD.

There's a more in depth blog post about estimating contract deployment costs here: https://jamesbachaini.com/how-to-calculate-gas-costs-for-solidity-contracts/

## Features

- **Compile Solidity Contracts:** The script compiles Solidity contracts using the `solc` compiler.
- **Estimate Gas Costs:** It estimates the gas units required for contract deployment using `ethers.js` and calculates the deployment cost in ETH and USD.
- **Real-Time ETH Price:** Fetches the current price of Ethereum in USD using the CoinGecko API.

## Prerequisites

- Node.js (>=14.x)
- npm or yarn
- An Ethereum JSON-RPC endpoint (default: `https://cloudflare-eth.com`)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/jamesbachini/Estimate-Deployment-Cost.git
    cd Estimate-Deployment-Cost
    ```

2. Install the dependencies:

    ```bash
    npm install ethers axios solc
    ```

## Usage

1. Create a Solidity contract file or use an existing one. Ensure the file has a `.sol` extension.

2. Run the script with the path to your Solidity contract file:

    ```bash
    node estimate.js ./path/to/your/contract.sol
    ```

3. The script will output:

    - Bytecode size of the contract
    - Estimated gas units required for deployment
    - Gas price and priority fee in gwei
    - Current ETH price in USD
    - Estimated deployment cost in ETH and USD

## Example Output

```bash
Bytecode Size: 608 bytes
Estimated Gas Units: 1137084
Gas Price: 30.0 gwei
Priority Fee: 1.5 gwei
ETH Price: $3000 USD
Estimated Deployment Cost: 0.0342 ETH (~$102.60 USD)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Socials

- [Website](https://jamesbachini.com)
- [YouTube](https://www.youtube.com/c/JamesBachini?sub_confirmation=1)
- [Substack](https://bachini.substack.com)
- [Podcast](https://podcasters.spotify.com/pod/show/jamesbachini)
- [Spotify](https://open.spotify.com/show/2N0D9nvdxoe9rY3jxE4nOZ)
- [Twitter](https://twitter.com/james_bachini)
- [LinkedIn](https://www.linkedin.com/in/james-bachini/)
- [GitHub](https://github.com/jamesbachini)

