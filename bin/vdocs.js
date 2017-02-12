#!/usr/bin/env node
const shell = require('shelljs');
const args = process.argv.slice(2);
const Insert = require('../documentation/insert');
const Usage = require('../documentation/usage');
const Movement = require('../documentation/movements');
const ansi = require('ansi');
const cursor = ansi(process.stdout);

let arg = args.shift();
switch(arg) {
    case '-h':
    case '--help':
        Usage();
        process.exit();
        break;
    case '-insert':
	Insert();
        process.exit();
        break;
    case '-movement':
	Movement();
	process.exit();
	break;
    case '':
        console.log('You need to enter a command');
        process.exit();
        break;
    default:
        console.log('This command is not supported by vdocs');
        console.log('Use vdocs --keys to see a list of commands')
        process.exit();
        break;
}


shell.exec("node bin/vdocs.js");
