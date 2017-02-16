#!/usr/bin/env node

const ansi = require('ansi');
const cursor = ansi(process.stdout);

const CutPaste = function(){
	cursor.bg.yellow()
	.fg.green()
	.write('These commands allow you to cut, paste and delete text\n')
	.fg.reset().bg.reset();
	console.log('\n');
	console.log('yy  :  yank (copy) a line');
	console.log('2yy  : yank 2 lines');
	console.log('yw  :  yank word');
	console.log('y$  :  yank to end of line');
	console.log('p  :  paste the clipboard after cursor');
	console.log('P  :  paste the clipboard before cursor');
	console.log('dd  :  delete(cut) a line');
	console.log('dw  :  delete(cut) the current word');
	console.log('x  :  delete(cut) current character');	
	console.log('\n');
	cursor.fg.green().bold()
	.write('Note: ').resetBold()
	.write('Most of these shortcuts also works in visual mode');	
}

module.exports = CutPaste;
