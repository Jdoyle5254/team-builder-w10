// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email, role);
    this.officeNumber = officeNumber;
     
  }
  getRole() {
    console.log('this', this);
    console.log(`This Person's Role: ${this.role}`);
     
    };   
}

const mgr = new Manager ("jack", 096, "jack@gmail.com", "Manager", "847-555-1212") 

mgr.printInfo(); 
mgr.getRole()
  

// `Manager` will also have:

//   * officeNumber

//   * getRole() // Overridden to return 'Manager'