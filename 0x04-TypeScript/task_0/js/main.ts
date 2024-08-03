interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Ezekiel',
  lastName: 'Smith',
  age: 29,
  location: 'Lagos'
};

const student2: Student = {
  firstName: 'James',
  lastName: 'Smiths',
  age: 25,
  location: 'London'
};

const studentsList: Student[] = [studenet1, student2];

document.addEventListener('DOMContentLoaded'. function() {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
});
