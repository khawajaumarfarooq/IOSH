module.exports = () => {
  return {
    secret: process.env.COOKIE_SECRET || 'The Quick Brown Fox Jumps Over The Lazy Dog',
    port: process.env.PORT || 4100
  };
};
