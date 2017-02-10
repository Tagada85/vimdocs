#!/usr/bin/env node
const ansi = require('ansi');
const cursor = ansi(process.stdout);

//Vim shortcuts for cursor movements

module.exports = function Movements(){
	cursor
	.fg.yellow()
	.write('Shortcuts for your cursor around the file.')
	.write('\n')
	.write('\n')
	.reset();
	console.log('h  :  move cursor left');
	console.log('j  :  move cursor down');
	console.log('k  :  move cursor up');
	console.log('l  :  move cursor right');
	console.log('w  :  jump by start of words');
	console.log('W  :  jump by words(spaces separate words)');
	console.log('e  :  jump to end of words(consider punctuation)');
	console.log('E  :  jump to end of words(no punctuation)');
	console.log('b  :  jump backwards by words(consider punctuation)');
	console.log('B  :  jump backwards by words(no punctuation)');
	console.log('0 (zero) : get to the start of the line');
	console.log('^  :  first non-blank character of line');
	console.log('$  :  get to the end of the line');
	console.log('G  :  Go To line command (prefixed with number)');
	console.log('\n');
	cursor
	.fg.green()
	.bold()
	.write('Note: ')
	.resetBold()
	.write('Prefix a command by a number by a number to repeat it. ex: 4j, 2B, 5k ...')
	.write('\n')
	.reset();
}
