// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(firstname, lastname, id, email, role, github ) {
    super(firstname, lastname, id, email, role);
    this.github = github;
         
  };
  getGitHub() {
    console.log('this', this);
    console.log(`This person's GitHub: https://github.com/${this.github}`);
     
    };   
}

// const eng = new Engineer ("jack", 096, "jack@gmail.com", "Engineer", "jackgithub") 

// eng.printInfo();
// eng.getRole();
// eng.getGitHub(); 

// `Engineer` will also have:

// * github  // GitHub username

// * getGithub()

// * getRole() // Overridden to return 'Engineer'