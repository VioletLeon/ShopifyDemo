require('dotenv');

module.exports = {
  reactStrictMode: true,
  env: {
    NASAKEY: process.env.NASAKEY,
  },
  images: {
    domains: ['apod.nasa.gov', 'i.imgur.com'],
  },
};
