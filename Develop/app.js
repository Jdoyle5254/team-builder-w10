const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

/* create a cli interface that takes in information on 
manager, engineer, intern.  using inquirer.
install npm 
install inquirer
install jest
create the questions for each person type. use if else statements.  
if manager else enginer else intern else employee.   
for each of these classes there will be information collected (user inputs)

the information will create an HTML page that displays the information about the team
we would need to run jest to test the information.  */
var employees = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your first name?',
      name: 'firstname',
    },
    {
        type: 'input',
        message: 'What is your last name?',
        name: 'lastname',
      },

    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'id',
      },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'checkbox',
        message: 'What is your current role? ',
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
   
      if (response.role == "Manager") {
          inquirer.prompt ({
            type: 'input',
            message: 'What is your Office Number?',
            name: 'officeNumber',  
          })
      .then((respnse2) => {
        console.log('response', response) 
        employees.push(new Manager (response.firstname, response.lastname, response.id, response.email, response.officeNumber));
        let newMgr = render(employees);
        console.log (newMgr); 
      })   
      } 
       else if (response.role == "Engineer") {
            inquirer.prompt ({
            type: 'input',
            message: 'What is your Git Hub User Name?',
            name: 'github',  
          })
      .then((respnse2) => {
            console.log('response', response);  
            const eng = new Engineer(response.firstname, response.lastname, response.id, response.email, response.github);
          })      

       } 
       else if (response.role == "Intern"){
            inquirer.prompt ({
            type: 'input',
            message: 'What is your School?',
            name: 'school',  
          })
      .then((respnse2) => {
            console.log('response', response);
            const inter = new Intern(response.firstname, response.lastname, response.id, response.email, response.school); 
          })     
       }
    //    console.log('response', response) 
    }) 

    // const mgr = new Manager(response.firstname, response.lastname, response.id, response.email, response.officeNumber);
    // mgr.render();

    //eng.render()


    