var inquirer = require("inquirer");
var fs = require('fs');
const { title } = require("process");
const Choices = require("inquirer/lib/objects/choices");
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? "
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project: "
    },
    {
      type: "input",
      name: "installation",
      message: "How does the user install this application? ",
      default: "npm install"
  },
  {
    type: "input",
    name: "usage",
    message: "How does the user operate this application? ",

},

{
  type: "list",
  name: "license",
  message: "How would you like to license this project? ",
  choices: ["Academic Free License [afl-3.0]", "Apache License 2.0 [apache-2.0]", "GNU Lesser General Public License Family [lgpl]",
  "Microsoft Public License [ms-pl]", "MIT License [MIT]", "zLib License [zlib]"

]
},
{
  type: "input",
  name: "contribution",
  message: "What limitations would you like to put on the contributions of other developers? "
},
{
  type: "input",
  name: "testing",
  message: "How would should this application be tested?",
  default: "npm test"
},
{
  type: "input",
  name: "email",
  message: "Enter your e-mail: "
},
{
  type: "input",
  name: "github",
  message: "Enter your github user-name: "
},

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {


inquirer.prompt(questions).then(function(data) {

  var filename = "README.md";
  console.log(data)
  const {title, description, installation, usage, license, contribution, testing, email, github} = data;

  fs.writeFile(filename, 
  `# ${title}\n
## Description\n
${description}\n
## License\n
${license}
## Table of Contents\n
*[Installation](#Installation)\n
*[Usage](#Usage)\n
*[Contribution](#Contribution)\n
*[Testing](#Testing)\n
*[Questions](#Questions)\n
## Installation\n
${installation}\n
## Usage\n
${usage}\n
## Contribution\n
${contribution}\n
## Testing\n
${testing}\n
## Questions\n
If you have any questions you may reach me at ${email}. You may also visit [my GitHub profile](https://github.com/${github})`, 
    
    
    function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});

}

// function call to initialize program
init();




