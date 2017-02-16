#!/usr/bin/env node

const ansi = require('ansi');
const cursor = ansi(process.stdout);

const Files = function(){
	cursor.bg.blue().fg.white()
	.write('These shortcuts are used to work with multiple files')
	.fg.reset().bg.reset().write('\n');
	console.log('\n');
	console.log(':e filename  :  edit a file in a new buffer');
	console.log(':bn  :  go to next buffer');
	console.log(':bp  :  go to previous buffer');
	console.log(':bd  :  delete a buffer(close a file)');
	console.log(':sp filename  :  open a file in a new buffer and split window');
	console.log('ctrl+ws  :  split windows');
	console.log('ctrl+ww  :  switch between windows');
	console.log('ctrl+wq  :  quit a window');
	console.log('ctrl+wv  :  split windows vertically');
        console.log('\n');
	cursor.fg.green().bold().write('Note: ').resetBold()
	.write('The commands :bn and :bp can be replaced respectively by :bnext and :bprev').write('\n').fg.reset();
}

module.exports = Files;
