module.exports = (config) => {
  const getAll = require('./get-all')(config);
  const getOne = require('./get-one')(config);

  return {
    getAll,
    getOne
  };
};
