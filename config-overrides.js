const path = require('path');

module.exports = function override(config, env) {
    config.resolve.alias['@media'] = path.resolve(__dirname, 'src/media/icons');
    return config;
};
