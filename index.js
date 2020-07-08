var inquirer = require("inquirer");
var fs = require('fs');
const { title } = require("process");
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
        message: "Describe your project "
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {


inquirer.prompt(questions).then(function(data) {

  var filename = "README.md";
  console.log(data.title)
  console.log(data.description)

  fs.writeFile(filename, `# ${data.title} \n ${data.description}`, function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});

}

// function call to initialize program
init();




