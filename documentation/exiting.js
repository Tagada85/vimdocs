#!/usr/bin/env node
const ansi = require('ansi');
const cursor = ansi(process.stdout);

const Exiting = function(){
	cursor.bg.yellow()
	.fg.green()
	.write('The commands allow you to leave a file and/or saving changes')
	.bg.reset().fg.reset().write('\n');
	console.log('\n');
	console.log(':w  :  write(save) the file, no exit');
	console.log(':wq  :  write(save) and quit');
	console.log(':q  :  quit(fails if file has changed)');
	console.log(':q!  :  quit and throw away changes');
	console.log('\n');
	cursor.fg.green().bold().write('Note: ')
	.resetBold().write('these commands are all prefixed by :').fg.reset();
}

module.exports = Exiting;
