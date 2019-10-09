module.exports = (config, database) => {
  const express = require('express');

  const router = express.Router();

  router.use('/users', require('./users')(config, database));

  return router;
};
