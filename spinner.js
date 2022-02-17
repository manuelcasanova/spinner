/*
We can use the special character \r to return our cursor back to the beginning of the line that we were on. After this, anything we write next to stdout will overwrite the line.
*/

process.stdout.write('hello from spinner1.js... \rheyyy\n');

/*
The first few characters are replaced by "heyyy". This is because \r brought our cursor back to the beginning.
*/
