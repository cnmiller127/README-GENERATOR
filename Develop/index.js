const inquirer = require("inquirer");
const fs = require('fs');
const { title } = require("process");
const Choices = require("inquirer/lib/objects/choices");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const err = "error";
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

// function generates markdown file
async function markDown() {
  var filename = "README.md";
 
  try{
    const {title, description, installation, usage, license, contribution, testing, email, github} = await inquirer.prompt(questions) ;
    const mDContent = `# ${title}\n
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
If you have any questions you may reach me at ${email}.
You may also visit [my GitHub profile](https://github.com/${github})`;
  
  await writeFileAsync(filename, mDContent); 
  }
  catch{
    console.log(err);
  }
}

// function call to initialize program
markDown();




