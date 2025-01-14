const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "query all the currently minted coins for the homepage grid"
    mintedCoins: [Minted!]!

  }

  "A Card is an individually minted asset within the Cataldi Crown NFT project"
  type Minted {
    "Policy ID"
    id: ID!
    "name of minted coin"
    name: String!
    "Pure or Pirate mint"
    Mint: String!
    thumbnail: String
    providance: String!
  }
`;
module.exports = typeDefs;

