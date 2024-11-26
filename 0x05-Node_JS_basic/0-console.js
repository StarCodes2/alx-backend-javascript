// Displays a message to standard output
function displayMessage(text) {
  if (typeof text !== 'string') {
    process.exit(1);
  }
  console.log(text);
}

module.exports = displayMessage;
