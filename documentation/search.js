#!/usr/bin/env node

const ansi = require('ansi');
const cursor = ansi(process.stdout);

const Search = function(){
	cursor.bg.yellow().fg.red()
	.write('These shortcuts are used to search for pattern and/or replace them')
	.fg.reset().bg.reset().write('\n');
	console.log('\n');
	console.log('/pattern  :  search for pattern');
	console.log('?pattern  :  search backward for pattern');
	console.log('n  :  repeat search in same direction (find next occurence)');
	console.log('N  :  repeat search in opposite direction (find previous occurence)');
	console.log(':%s/old/new/g  :  replace old with new throughout file (notice g flag)');
	console.log(':%s/old/new/gc  :  replace olg with new throughout file with confirmation (c flag)');
	console.log('\n');
	cursor.fg.green().bold().write('Note: ').resetBold()
	.write('These shortcuts must be used outside of Insert mode')
	.fg.reset().write('\n');	
}

module.exports = Search;
