function displayMessage(text) {
  if (typeof text !== 'string') {
    process.exit(1);
  }
  process.stdout.write(`${text}\n`);
}

module.exports = displayMessage;
