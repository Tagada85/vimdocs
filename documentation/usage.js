#!usr/bin/env node

const ansi = require('ansi');
const cursor = ansi(process.stdout);

//Text shown when -h or --help flag is found

const Usage = function(){
	cursor.bg.blue().fg.yellow()
	.write('Welcome to VIM Docs. The terminal application that helps you with VIM shortcuts.\n')
	.reset()	
	.write('\n');
	console.log('');
	console.log('\nUsage: vdocs <action>');
	console.log('\n');
	console.log('-h, --help  :  Display available commands');
	console.log('-v --version  :  Display the application\'s version');
	console.log('-insert  :  Show shortcuts about the VIM insert mode');
	console.log('-movement  :  Show shortcuts to move the cursor inside VIM');
	console.log('-search  :  Show shortcuts to search and replace patterns');
	console.log('-visual  :  Show shortcuts to interact with the visual mode');
	console.log('-exiting  :  Show shortcuts to save and exit files');
	console.log('-files  :  Show shortcuts to work with multiples files');
	console.log('-cutpaste  :  Show shortcuts to cut and paste text in VIM');
	console.log('-editing  :  Show shortcuts to edit files in VIM');

		
}

module.exports = Usage;
