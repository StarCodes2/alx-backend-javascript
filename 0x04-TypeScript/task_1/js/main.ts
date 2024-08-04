interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string) => string
}

const teacher1: Teacher = {
  firstName: 'Ezekiel',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Lagos',
  contract: true
};

const teacher2: Teacher = {
  firstName: 'James',
  lastName: 'Smiths',
  fullTimeEmployee: false,
  yearsOfExperience: 8,
  location: 'London',
  contract: false
};

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}
