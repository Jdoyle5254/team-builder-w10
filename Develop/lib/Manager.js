// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(firstname, lastname, id, email, role, officeNumber) {
    super(firstname, lastname, id, email, role);
    this.officeNumber = officeNumber;     
  }

  getRole() {
    console.log('this', this);
    console.log(`This Person's Role: ${this.role}`);  
    }; 
  getPhone() {
    console.log(`This is the direct line: ${this.officeNumber}`)
  }     
}

// const mgr = new Manager ("jack", 096, "jack@gmail.com", "Manager", "847-555-1212") 

// mgr.printInfo(); 
// mgr.getRole();
// mgr.getPhone();
  

// `Manager` will also have:

//   * officeNumber

//   * getRole() // Overridden to return 'Manager'