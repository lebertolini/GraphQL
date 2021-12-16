const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server")

const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")

require("dotenv").config();

mongoose
   .connect(process.env.MONGODB_USER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 })
   .then(() => console.log("Database connected"))
   .catch((error) => console.log("Databased failed: ", error));

const server = new ApolloServer({ typeDefs, resolvers })

server
  .listen()
  .then(({ url }) => console.log(`Server ready at ${url}`))
  .catch(error => console.log("Server failed: ", error))