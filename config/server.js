module.exports = ({ env }) => ({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 1337,
  app: {
    keys: process.env.APP_KEYS ? process.env.APP_KEYS.split(',') : [],
  },
  session: {
    keys: process.env.SESSION_KEYS ? process.env.SESSION_KEYS.split(',') : [],
  },
});