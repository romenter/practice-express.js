const express = require('express');
const productRouter = require('./products');
const userRouter = require('./users');
const categoryRouter = require('./categories');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoryRouter);
}

module.exports = routerApi;
