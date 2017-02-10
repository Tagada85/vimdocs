#!/usr/bin/env node
const ansi = require('ansi');
const cursor = ansi(process.stdout);

const Insert = function(){
	cursor
	.fg.yellow()
	.write("The Insert Mode's purpose is to Insert and/or Append text")
	.write('\n')
	.write('The mode shows -- INSERT -- at the bottom of the window')
	.fg.reset();
	console.log('\n');
	console.log('i  :  enter insert mode at cursor');
	console.log('I  :  enter insert mode at the beginning of the line');
	console.log('a  :  append after the cursor');
	console.log('A  :  append at the end of the line');
	console.log('o  :  open a blank line below the current line');
	console.log('O  :  open a blank line above the current line');
	console.log('ea :  append at the end of the word (e => jump to end of word + a => append after cursor)');
	console.log('Esc : exit insert mode');
	console.log('\n');
	cursor.fg.green()
	.write("Note: You don't need to press Enter after those commands, only the letter.")
	.fg.reset()   
	.write('\n');
}



module.exports = Insert;
