// Creates a HTTP server using Express
const express = require('express');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const countStudents = async (path) => {
  try {
    const data = await readFile(path, 'utf8');
    const lines = data.trim().split('\n');
    const rows = lines.slice(1).map((line) => line.split(','));
    const total = rows.length;
    const dept = new Map();

    rows.forEach((row) => {
      if (!dept.has(row[3])) {
        dept.set(row[3], [row[0]]);
      } else {
        dept.get(row[3]).push(row[0]);
      }
    });
    let result = `Number of students: ${total}\n`;

    for (const [key, value] of dept) {
      result += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
    }
    return result.substring(0, result.length - 1);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const db = process.argv[2];
  try {
    const studentList = await countStudents(db);
    res.send(`This is the list of our students\n${studentList}`);
  } catch (err) {
    res.send(`This is the list of our students\n${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
