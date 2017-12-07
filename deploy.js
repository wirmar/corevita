/* global require, __dirname */

const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const host = 'ftp.pigfly.de';

const config = {
  username: 'pigfly.de',
  host,
  port: 21,
  localRoot: __dirname + "/build",
  remoteRoot: "/corevita",
};

ftpDeploy.deploy(config, function(err) {
  if (err){
    console.log(err);
  } else{
    console.log(`finished deploying to ${host}`);
  }
});
