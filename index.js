const {ApolloServer} = require('apollo-server');
const {ApolloGateway} = require('@apollo/gateway');

require('dotenv').config();

const gateway = new ApolloGateway();

const server = new ApolloServer({
  gateway
});

const port = 4000 || process.env.PORT;

server
  .listen({port})
  .then(({url}) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch(err => {
    console.error(err);
  });