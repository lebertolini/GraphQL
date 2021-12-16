const { gql } = require('apollo-server');

const Mutations = gql`
    type Mutation {
        createUser(user: UserInput): User
        updateUser(id: String, user: UserInput): User
        deleteUser(id: String): User
    }

    input UserInput {
        name: String
        email: String
        password: String
    }
`;

module.exports = Mutations;