#!/usr/bin/env node
const shell = require('shelljs');

shell.touch('~/.bash_profile');
shell.echo('Setting Git aliases..');

if (!shell.which('git')) {
    shell.echo('I see git is not installed in your system. Please install Git and run this script! :)');
    shell.exit(1)
}
else{
    const gstFound = shell.grep('--','gst','~/.bash_profile');
    const gpomFound = shell.grep('--','gpom','~/.bash_profile');
    const gcmFound = shell.grep('--','gcm','~/.bash_profile');
    const gprFound = shell.grep('--','gpr','~/.bash_profile');
    const gcaFound = shell.grep('--','gca','~/.bash_profile');

    if(gpomFound.stdout === '\n')
        shell.echo('alias gpom=\"git push origin master\"').toEnd('~/.bash_profile');

    if(gstFound.stdout === '\n')
        shell.echo('alias gst=\"git status\"').toEnd('~/.bash_profile');

    if(gcmFound.stdout === '\n')
        shell.echo('alias gcm=\"git commit -m\"').toEnd('~/.bash_profile');

    if(gprFound.stdout === '\n')
        shell.echo('alias gpr=\"git pull -r\"').toEnd('~/.bash_profile');

    if(gcaFound.stdout === '\n')
        shell.echo('alias gca=\"git checkout .\"').toEnd('~/.bash_profile');

    const contents = shell.cat('~/.bash_profile');
    shell.echo('\n-----Your bash profile-----\n');
    shell.echo(contents);
    shell.echo('\nClose this terminal and open a new one to make sure the changes are reflected!');
    shell.echo('\nStay lazy and innovate!\n');
    shell.exit(1)
}