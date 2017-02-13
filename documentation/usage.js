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

		
}

module.exports = Usage;
