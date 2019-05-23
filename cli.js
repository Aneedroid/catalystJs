#!/usr/bin/env node
const shell = require('shelljs');
const colors = require('colors'); // eslint-disable-line no-unused-vars
const boxen = require('boxen');

const { commandConfig } = require('./config/commands');
const { isAliasFoundInFile } = require('./helpers/cli-helpers');

const fileName = '~/.bash_profile';

shell.echo('\nCatalysty'.magenta.italic);
shell.touch(fileName);
shell.echo('\nSetting Git aliases...\n'.green.bold);

if (!shell.which('git')) {
  shell.echo('I see git program is not installed in your system. Please install Git and run this script! :)'.red);
  shell.exit(1);
} else {
  Object.keys(commandConfig).forEach((alias) => {
    if (!isAliasFoundInFile(alias, fileName)) shell.echo(commandConfig[alias]).toEnd(fileName);
  });

  shell.exec('osascript -e \'display notification "Git aliases have been set!" with title "Catalysty"\'');

  const contents = shell.cat(fileName);

  // shell.echo('\n-----Your bash profile-----\n'.cyan.inverse.bold);
  shell.echo(boxen(`${'-----Your bash profile-----'.cyan.inverse.bold}${'\n\n'}${contents.cyan}`, { padding: 1, margin: 0.5, borderStyle: 'double' }));
  shell.echo('\nClose this terminal and open a new one to make sure the changes are reflected!\n'.green.bold);

  shell.exit(1);
}
