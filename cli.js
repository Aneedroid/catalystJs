#!/usr/bin/env node
const shell = require('shelljs');

const { commandConfig } = require('./config/commands');
const { isAliasFoundInFile } = require('./helpers/cli-helpers');

const fileName = '~/.bash_profile';

shell.touch(fileName);
shell.echo('Setting Git aliases..');

if (!shell.which('git')) {
  shell.echo('I see git is not installed in your system. Please install Git and run this script! :)');
  shell.exit(1);
} else {
  Object.keys(commandConfig).forEach((alias) => {
    if (!isAliasFoundInFile(alias, fileName)) shell.echo(commandConfig[alias]).toEnd(fileName);
  });

  const contents = shell.cat(fileName);

  shell.echo('\n-----Your bash profile-----\n');
  shell.echo(contents);
  shell.echo('Close this terminal and open a new one to make sure the changes are reflected!\n');

  shell.exit(1);
}
