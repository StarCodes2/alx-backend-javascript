// Creates a HTTP server using Node JS
const fs = require('fs');
const util = require('util');
const { createServer } = require('http');

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

const hostname = '127.0.0.1';
const port = '1245';

const app = createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const db = process.argv[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    try {
      const studentList = await countStudents(db);
      res.end(studentList);
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
