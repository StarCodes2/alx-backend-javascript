// Executes through command line.
console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const text = process.stdin.read();
  if (text !== null) {
    process.stdout.write(`Your name is: ${text}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
