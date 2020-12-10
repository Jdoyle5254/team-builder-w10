const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "./output/");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



// I created helper functions to call the specific role type questions for manager, engineer intern
function manager(response) {
  inquirer.prompt({
    type: 'input',
    message: 'What is the Manager Office Number?',
    name: 'officeNumber',
  },

  )

    .then((response2) => {
      console.log('response', response, response2)
      let newMgr = new Manager(response.firstname, response.lastname, response.id, response.email, response.role[0], response2.officeNumber);
      console.log(newMgr);
      employees.push(newMgr);
      addemp(); 

    })
}

function engineer(response) {
  inquirer.prompt({
    type: 'input',
    message: 'What is Engineer Git Hub User Name?',
    name: 'github',
  })
    .then((response2) => {
      console.log('response', response);
      const newEng = new Engineer(response.firstname, response.lastname, response.id, response.email, response.role[0], response2.github);
      employees.push(newEng);
      addemp();
    })

}

function intern(response) {
  inquirer.prompt({
    type: 'input',
    message: 'What is the Intern current School?',
    name: 'school',
  })
    .then((response2) => {
      console.log('response', response,);
      const newInt = new Intern(response.firstname, response.lastname, response.id, response.email, response.role[0], response2.school);
      console.log(newInt);
      employees.push(newInt);
      addemp();
    })


}
// this function is the final prompt to add another employee.  If Yes or No.  If yes it will return to 
// the start of the questions.  If no it will print the created employee objects to the HTML page.
function addemp() {
inquirer.prompt([
  {
    type: 'confirm',
    message: 'Do you want to add another employee?',
    name: 'addemp',
  },
],
)
  .then((response2) => {
    if (response2.addemp == true) {
      questionStart()
    } 
    else {
      fs.writeFile(outputPath, render(employees), (err) => {
        if (err) throw err;
      });


    }
  })
}

// here I created the empty array for the employee objects to get pushed to
var employees = [];
// This function then runs the 'employee' object questions
function questionStart() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the employees first name?',
        name: 'firstname',
      },
      {
        type: 'input',
        message: 'What is the employees last name?',
        name: 'lastname',
      },

      {
        type: 'input',
        message: 'What is the employee ID number?',
        name: 'id',
      },

      {
        type: 'input',
        message: 'What is the employee email address?',
        name: 'email',
      },
      {
        type: 'checkbox',
        message: 'What is the employee current role? ',
        name: 'role',
        choices: [
          {
            name: 'Manager',
          },
          {
            name: 'Engineer',
          },
          {
            name: 'Intern',
          },
        ],
      },
    ])

    .then((response) => {

      if (response.role[0] == "Manager") {
        manager(response)
      }
      else if (response.role[0] == "Engineer") {
        engineer(response)
      }
      else if (response.role[0] == "Intern") {
        intern(response)
      }

    })
  }

  questionStart()




