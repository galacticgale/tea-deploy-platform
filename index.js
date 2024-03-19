const tea_deploy_platform = require('tea-deploy-platform');
const tea_deploy_monitor = require('tea-deploy-monitor');
const xml2js = require('xml2js');
const web3_react = require('web3-react');
const dotenv = require('dotenv');
const multer = require('multer');
const cheerio = require('cheerio');
const truffle = require('truffle');
const ipfs_http_client = require('ipfs-http-client');
const chalk = require('chalk');
const jquery = require('jquery');
const jest = require('jest');

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const zlib = require('zlib');
const input = 'Compress me!';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log('Compressed data:', buffer.toString('base64'));
  }
});

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);