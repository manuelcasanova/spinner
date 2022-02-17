/*
We can use the special character \r to return our cursor back to the beginning of the line that we were on. After this, anything we write next to stdout will overwrite the line.
*/

//process.stdout.write('hello from spinner1.js... \rheyyy\n');

/*
The first few characters are replaced by "heyyy". This is because \r brought our cursor back to the beginning.
*/

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1800);