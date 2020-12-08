// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, id, email, role);
    this.school = school;
     
  }
  getSchool() {
    console.log('this', this);
    console.log(`This person's School: ${this.school}`);
     
    };   
}

const int = new Intern ("jack", 096, "jack@gmail.com", "Intern", "Northwestern") 

int.printInfo();
int.getRole();
int.getSchool(); 

  


 

// In addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'