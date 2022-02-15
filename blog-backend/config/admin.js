module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '59dcc1c5a6f8496433ebf7dad15d16a4'),
  },
});
