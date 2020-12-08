// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
      this.name=name;
      this.id=id;
      this.email=email;
      this.role=role; 

    }
  
    printInfo() {
      console.log('this', this)
      console.log(`This person's role is the ${this.role}`);
      console.log(`This person's name is  ${this.name}`);
      console.log(`This person's id  ${this.id}`);
      console.log(`This person's email is ${this.email}`);
      }
       
    getRole() {
      console.log('this', this);
      console.log(`This Person's Role: ${this.role}`);
         
        }    
    }
  
  
  module.exports = Employee;

  const emp = new Employee ("Jen", 001, "jd@gmail.com", "employee")
  emp.printInfo()  
  emp.getRole();

  // * name
  // * id
  // * email
  // * getName()
  // * getId()
  // * getEmail()
  // * getRole() // Returns 'Employee'