#!/usr/env/bin node
const ansi = require('ansi');
const cursor = ansi(process.stdout);

const Editing = function(){
	cursor.bg.yellow().fg.blue()
	.write('This section focuses on replacing small portions on text quickly\n')
	.write('Those shortcuts are more specifics than the ones shown in -insert\n')
	.fg.reset()
	.bg.reset()
	.write('\n');
	console.log('r  :  replace one character (follow up with the character you want to see)');
	console.log('J  :  join line below the current one');
	console.log('cc  :  change(replace) an entire line');
	console.log('cw  :  change(replace) to the end of word');
	console.log('c$  :  change(replace) to the end of line');
	console.log('s  :  delete character at cursor and substitute text(enter insert mode)');	
	console.log('S  :  delete line at cursor and substitute text (same as cc)');
	console.log('xp  :  transpose two letters(x => delete, p => paste)');
	console.log('u  :  undo last change');
	console.log('.  :  repeat last command\n');
	cursor.fg.green()
	.write('Note: Not all of these make you enter the Insert mode!\n')
	.write('The shortcuts r, J, xp, u and . do not trigger the insert mode');
 }

module.exports = Editing;
