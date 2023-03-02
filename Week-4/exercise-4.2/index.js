// Parent class Person
const Person = function () {};

// Declaring method on Person's prototype
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// Child class Teacher
const Teacher = function () {};

// Creating parent-child relation between Teacher and Person classes
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

// Declaring method on Teacher's prototype
Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

const teacher = new Teacher();

// Assigning name and age to instance of Teacher class by
// calling method declared on Person class's (Teacher class's parent) prototype
teacher.initialize("Johanthon", 25);

// Calling method declared on Teacher class's prototype
teacher.teach("Computer Graphics");
