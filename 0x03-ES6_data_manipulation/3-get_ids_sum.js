export default function getStudentIdsSum(studentList) {
  if (Array.isArray(studentList)) {
    return studentList.reduce((accumulator, student) => accumulator + student.id, 0);
  }
  return 0;
}
