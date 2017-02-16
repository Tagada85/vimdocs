#!/usr/bin/env node
const shell = require('shelljs');
const args = process.argv.slice(2);
const Insert = require('../documentation/insert');
const Usage = require('../documentation/usage');
const Movement = require('../documentation/movements');
const Editing = require('../documentation/editing');
const VisualMode = require('../documentation/visualmode');
const CutPaste = require('../documentation/cutpaste');
const Exiting = require('../documentation/exiting');
const Search = require('../documentation/search');
const Files = require('../documentation/files');
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
    case '-editing':
	Editing();
	process.exit();
	break;
    case '-visual':
	VisualMode();
	process.exit();
	break;
    case '-cutpaste':
	CutPaste();
	process.exit();
	break;
    case '-exiting':
	Exiting();
	process.exit();
	break;
    case '-search':
	Search();
	process.exit();
	break;
    case '-files':
	Files();
	process.exit();
	break;
    default:
        console.log('This command is not supported by vdocs');
        console.log('Use vdocs -h to see a list of commands')
        process.exit();
        break;
}


shell.exec("node bin/vdocs.js");
