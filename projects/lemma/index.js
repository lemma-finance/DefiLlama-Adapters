const retry = require('async-retry')
const { GraphQLClient, gql } = require('graphql-request')

async function fetch() {
    var endpoint ='https://api.thegraph.com/subgraphs/name/yashnaman/usdl-arbitrum-one';
    var graphQLClient = new GraphQLClient(endpoint)
    var query = gql`
    {
        usdl(id: 1) {
              totalSupply
        }
      }
    `;
    const results = await retry(async bail => await graphQLClient.request(query))
    return Number(results.usdl.totalSupply);
  }
  module.exports = {
    arbitrum: {
        fetch
    },
    fetch
  }