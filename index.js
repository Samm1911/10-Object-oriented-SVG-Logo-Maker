// import inquirer, fs and the three classes: triangle, circle and square
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

// questions for the prompt and user input to choose the logo spcifications
const questions = [
  {
    type: "input",
    message: "Enter up to three characters for your logo!",
    name: "text",
    // validate function to validate user input, if user input is more than three characters, it will return an error message, otherwise it the questions continue
    validate: function (input) {
      if (input.length > 3) {
        return "Please enter up to three characters.";
      }
      return true;
    },
  },
  {
    type: "input",
    message:
      "What color should the text be in (color keyword or hexademical number)?",
    name: "tcolor",
  },
  {
    type: "list",
    message:
      "Which of the following three shapes(circle, triangle, and square) should your logo have?",
    name: "shape",
    // let user choose between those three shapes
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message:
      "What color should the shape be in (color keyword or hexademical number)?",
    name: "scolor",
  },
];

// function to write the svg file, with all the user input stored in variables
function writeToFile(fileName, { text, tcolor, shape, scolor }) {
  // variable to create shape based on user input
  let createShape;
  // switch cases which will choose the classes based on the user input
  switch (shape) {
    case "Circle":
      // inside of the class is scolor as a passed argument, since the color of the shape can be chosen too
      createShape = new Circle(scolor);
      break;
    case "Triangle":
      createShape = new Triangle(scolor);
      break;
    case "Square":
      createShape = new Square(scolor);
      break;
    default:
      // error case
      throw new Error("Invalid shape choice");
  }

  // template for the svg file passing in the shape classes and render function performed, based on the class and the rest of the variables passed in the template
  const svgTemplate = `<svg version="1.1" 
    width="300" height="200" 

    xmlns="http://www.w3.org/2000/svg">

    ${createShape.render()}

    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${tcolor}">${text}</text>

    </svg>`;

  // fs write file, takes filename and the svgTemplate with all the inserted template literals
  fs.writeFileSync(fileName, svgTemplate);
}

// initialize inquirer, with the questions, which takes the answers to create logo.svg inside the examples folder and passes the answers as arguments in the writeToFile function
inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile("./examples/logo.svg", answers);
    // message displays, when logo is generated
    console.log("Generated logo.svg");
    // in case of an error, console displays an error
  })
  .catch((err) => {
    console.log(err);
  });
