// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Shape = require("./shape");

class Rectangle extends Shape {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(area, perimeter);
    this.sideA = sideA;
    this.sideB = sideB;
  }
}

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'