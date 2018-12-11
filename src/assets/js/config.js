var config = {};

config.api = {};

config.api.path = (/\.vm|\.dev|\.qa/.test(location.host)) ? location.protocol + '//api.' + location.host : location.protocol + '//api.promocaovoceemcores.com.br';

if (/localhost/.test(location.host)) config.api.path = "http://api.voceemcores-2018.qdb.vm";

config.api.upload = config.api.path.replace('api','upload') + '/upload';

config.fileSize = 10;
config.fileSizeBites = config.fileSize * 1024 * 1024;

config.numProducts = 20;
config.minAge = 18;
config.debug = false; // CHANGE TO FALSE AFTER TESTS
config.errorsClassName = ['block', 'moreof', 'cpf', 'date', 'empty', 'mail', 'equal', 'invalid', 'exist', 'noclub','limit'];

module.exports = config;
