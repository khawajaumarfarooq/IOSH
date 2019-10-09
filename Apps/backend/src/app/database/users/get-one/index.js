module.exports = (config) => {
    const axios = require('axios').default;

    const {
        baseURI
    } = config;

    return async (id) => {
        const url = new URL(`/users/${id}`, baseURI).toString();

        const response = await axios.get(url);
        const user = response.data;

        return user;
    };
};