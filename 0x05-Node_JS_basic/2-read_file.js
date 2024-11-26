// Reads a file synchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
    console.log(`Number of students: ${total}`);

    for (const [key, value] of dept) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
