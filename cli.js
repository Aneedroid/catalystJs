#!/usr/bin/env node
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const colors = require('colors');

const catalyze = async (command) => {
  const { error, stdout, stderr } = await exec(command);
  if (error) {
    console.red(`Error while executing - : ${error}`);
    return;
  }
  if(stderr)
      console.log(colors.yellow(`${stderr}`));
  else
    console.log(colors.green(`${stdout}`));
};

catalyze('git clone https://github.com/Cl1kx/dawnJs.git');