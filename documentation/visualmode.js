#!/usr/bin/env node
const ansi = require('ansi');
const cursor = ansi(process.stdout);

const VisualMode = function(){
	cursor.bg.white()
	.fg.black().write('The visual mode is a different mode than the insert.')
	.write('This mode is used to mark words, blocks or parts of text to use them however you see fit').bg.reset().fg.reset().write('\n');
	cursor.fg.yellow().write('Commands to mark text: ').write('\n').fg.reset();
	console.log('\n');
	console.log('v  :  start the visual mode');
	console.log('V  :  start Linewise visual mode(you mark text by lines instead of characters)');	      console.log('o  :  move your cursor to other end of marked area');
	console.log('Ctrl+v  :  start visual block mode '); 
	console.log('O  : move to other corner of block');
	console.log('aw  :  mark a word');
	console.log('ab  :  mark a () block (with braces)');
	console.log('aB  :  mark a {} block (with brackets)');
	console.log('ib  :  mark an inner () block (without braces)');	
	console.log('iB  :  mark an inner {} block (without brackets)');
	console.log('Esc  :  exit visual mode\n');
	cursor.fg.yellow().write('Commands to interact with marked text').write('\n').fg.reset();
	console.log('\n');
	console.log('>  :  shift right(indent right)');
	console.log('<  :  shift left(indent left)');
	console.log('y  :  yank (copy) marked text');
	console.log('d  :  delete marked text');
	console.log('~  :  switch case(lowercase to uppercase or vice versa)\n');
	cursor.fg.green()
	.bold()
	.write('Note:')
	.resetBold()
	.write('Outside of v, V and Ctrl+v, the other commands require you to already be in visual mode').fg.reset();
}

module.exports = VisualMode;
