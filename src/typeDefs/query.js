const { gql } = require('apollo-server');

const query = gql`
    type Query {
        users: [User]
        user(id: ID!): User
    }
`;

module.exports = query;