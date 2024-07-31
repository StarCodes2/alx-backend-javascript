export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const gradeMap = newGrades.reduce((acc, grade) => {
    acc[grade.studentId] = grade.grade;
    return acc;
  }, {});

  return studentList.filter((student) => student.location === city).map((student) => ({
    ...student,
    grade: gradeMap[student.id] || 'N/A',
  }));
}
