export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'cbb96998bf388cd8f90027ea2b16971c'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'cbb96998bf388cd8f90027ea2b16971c'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
