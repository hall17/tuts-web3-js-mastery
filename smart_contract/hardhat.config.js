//https://eth-goerli.alchemyapi.io/v2/TXUABsNtj6z1jlh_PL0dvuf3RYkA9eNA

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url:'https://eth-goerli.alchemyapi.io/v2/TXUABsNtj6z1jlh_PL0dvuf3RYkA9eNA',
      accounts: ['3439efe31ba957bf10fd5df2e51a8955f6eed692a63ac3a0bfc1223d71054700']
    }
  }
}