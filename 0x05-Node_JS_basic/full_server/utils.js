// Reads from a file asynchronously with Node JS
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function readDatabase(path) {
  try {
    const data = await readFile(path, 'utf8');
    const lines = data.trim().split('\n');
    const rows = lines.slice(1).map((line) => line.split(','));
    const dept = new Map();

    rows.forEach((row) => {
      if (!dept.has(row[3])) {
        dept.set(row[3], [row[0]]);
      } else {
        dept.get(row[3]).push(row[0]);
      }
    });
    return dept;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
