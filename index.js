// Imports
const fs = require ('fs')
const inquirer = require ('inquirer')
const {Circle, Rect, Ellipse} = require ('./lib/shapes')


// Create questions for user input
const questions = [
{
    type: "list",
    name: "Shape",
    message: "What would like the shape to be?",
    choices: ["Rectangle","Circle","Ellipse"],
},
{
    type: "list",
    name: "Color",
    message: "Which color for the logo?",
    choices: ["Red", "Blue", "Yellow"],
},];


// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then( answers => { 
    let shape;
        switch(answers.Shape) {

            case "Circle":
                shape = new Circle(answers.Color, 50);
                break;
            case "Rectangle":
                shape = new Rect(answers.Color, 50);
                break;
            case "Ellipse":
                shape = new Ellipse(answers.Color, 50);
                break;
            }

    const svgContent = `<svg
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            stroke="red"
            fill="grey">
            ${shape.render()} </svg>`
    writeToFile('logo.svg', svgContent)
})};

function writeToFile(fileName, response) {
    fs.writeFile(fileName, response, (err) => {if (err)
        {console.log ("Error Occured")} else {console.log ("Logo Created Successfully")}
    })
}

// Function call to initialize app
init();
