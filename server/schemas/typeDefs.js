// schemas/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type MailingList {
    email: String!
    preferences: String
    subscribedAt: String
  }

  type Query {
    mailingList: [MailingList] # Query to fetch all subscribers
  }

  type Mutation {
    subscribeToMailingList(email: String!, preferences: String): MailingList
  }
  
  # Your other typeDefs here...
`;

module.exports = typeDefs;
