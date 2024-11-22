const sleep = require('sleep');

const seconds = process.argv[2] || 10;
sleep.sleep(seconds);