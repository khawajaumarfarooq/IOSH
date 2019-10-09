module.exports = (config) => {
  const axios = require('axios').default;

  const {
    baseURI
  } = config;

  return async () => {
    const url = new URL('/users', baseURI).toString();

    const response = await axios.get(url);
    const users = response.data.map((item) => ({
      id: item.id,
      name: item.name
    }));

    return users;
  };
};
