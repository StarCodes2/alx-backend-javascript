// StudentsController class
const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const db = process.argv[2];
      const fields = await readDatabase(db);
      let result = 'This is the list of our students\n';
      for (const [key, value] of fields) {
        result += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
      }
      response.send(result.substring(0, result.length - 1));
    } catch (err) {
      response.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const { major } = request.params;
      if (major !== 'CS' && major !== 'SWE') {
        throw new Error('Major parameter must be CS or SWE');
      }
      const db = process.argv[2];
      const fields = await readDatabase(db);
      const value = fields.get(major);
      const result = `List: ${value.join(', ')}`;
      response.send(result);
    } catch (err) {
      response.status(500).send(err.message);
    }
  }
}

module.exports = StudentsController;
