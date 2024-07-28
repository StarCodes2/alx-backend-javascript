export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesByDepartment) {
      return Object.keys(employeesByDepartment).length;
    },
  };
}
