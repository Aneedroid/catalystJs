const shell = require('shelljs');

const isAliasFoundInFile = (alias, fileName) => {
  const isFound = shell.grep('--', alias, fileName);
  return isFound.stdout !== '\n';
};

module.exports = {
  isAliasFoundInFile,
};
