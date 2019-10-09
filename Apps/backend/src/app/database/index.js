module.exports = (config) => {
    const baseURI = 'https://jsonplaceholder.typicode.com';

    const users = require('./users')({
        ...config,
        baseURI
    });

    return {
        users
    };
};