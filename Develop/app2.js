const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "./output/");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// //   Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)   

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!   

/* once one employee is updated should ask a question yes no do you want to enter another employee.   If true, then the questions should start from the beginning (for loop? while loop?  for each?)

Also employees need to be appended to the page of the main, not overwritten.  

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
// var addEmployee = true;
// var restart = function() {
 
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
   
      if (response.role[0] == "Manager") {
          inquirer.prompt ({
            type: 'input',
            message: 'What is your Office Number?',
            name: 'officeNumber',  
          },

          {type: 'confirm',
          message: 'Do you want to add another employee?',
          name: 'addemp',
          },
          )
       
       
      .then((response2) => {
        console.log('response', response, response2) 
        let newMgr = new Manager (response.firstname, response.lastname, response.id, response.email, response.role[0], response2.officeNumber);
        console.log(newMgr)
         
        employees.push(newMgr)
        let mgr1 = render(employees);
          
        fs.writeFile(outputPath, mgr1, (err) => {          
              if (err) throw err; 
          });

        // if (response.addemp == true) {
        //   restart ();
        // }  
      });
  
  
      } 
       else if (response.role == "Engineer") {
            inquirer.prompt ({
            type: 'input',
            message: 'What is your Git Hub User Name?',
            name: 'github',  
          })
      .then((response2) => {
            console.log('response', response);  
            const eng = new Engineer(response.firstname, response.lastname, response.id, response.email, response2.github);
          })      

       } 
       else if (response.role == "Intern"){
            inquirer.prompt ({
            type: 'input',
            message: 'What is your School?',
            name: 'school',  
          })
      .then((response2) => {
            console.log('response', response,);
            const inter = new Intern(response.firstname, response.lastname, response.id, response.email, response2.school); 
            console.log(response2.school)
          })     
       }
 
    }) 

// }

    // const mgr = new Manager(response.firstname, response.lastname, response.id, response.email, response.officeNumber);
    // mgr.render();

    //eng.render()


    