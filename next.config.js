const env = require('./config');

module.exports = {
    images: {
        domains: [process.env.NEXT_PUBLIC_WP_URL],
    },
    env
}