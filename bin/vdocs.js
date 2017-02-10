#!/usr/bin/env node
const shell = require('shelljs');
const args = process.argv.slice(2);
const insert = require('../documentation/insert').insert;

const usage = [
    '',
    ' Usage: vdocs <actionName>',
    '',
    ' -h, --help     Display usage information',
    ' -V, --version  Output the current version',
    ' --insert   Shows how to insert text in vim',
    ' --keys     Shows a list of shortcuts supported by vdocs'
].join('\n');

let arg = args.shift();
switch(arg) {
    case '-h':
    case '--help':
        console.log(usage);
        process.exit();
        break;
    case 'cut':
        console.log('Cut a line with v (visual mode) and d');
        process.exit();
        break;
    case 'insert':
        insert();
        process.exit();
        break;
    case '':
        console.log('You need to enter a command');
        process.exit();
        break;
    case default:
        console.log('This command is not supported by vdocs');
        console.log('Use vdocs --keys to see a list of commands')
        process.exit();
        break;
}


shell.exec("node bin/vdocs.js");
