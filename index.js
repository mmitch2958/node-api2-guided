const express = require('express');
const router = require('./hubs/hubs-router');

//add router from hubs folder 
const hubsRouter = require('./hubs/hubs-router');
//5 import router 
const productsRouter = require('./products/products-router.js')

const server = express();

server.use(express.json());

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

//new code 
server.use('/api/hubs', hubsRouter);
server.use('/api/products', productsRouter);
// 6 user the router for any requrest 
server.use('/api/prodcuts', productsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});
const port = 4000
server.listen(port, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
