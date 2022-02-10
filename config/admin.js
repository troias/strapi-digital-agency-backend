module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5521206b0c690723a145b10031e1a8eb'),
  },
});
