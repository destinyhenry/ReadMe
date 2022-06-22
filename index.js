//node modules
const inquirer = require('inquirer');
const fs = require('fs');


const generateHTML = (answers) => {
    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Readme</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Hello I'm ${answers.name}</h1>
          <p class="lead">Welcome to my ReadMe</p>
          <p> ${answers.instillation} ${answers.instructions} ${answers.motivation} ${answers.solution} ${answers.takeaway}
        </div>
      </div>
    
</body>
</html>
    `;


    fs.writeFile("index.html" , html, "utf8" , (err) => {
        if (err) throw err;
        console.log("You did it!")
    })
    console.log(answers);
}

// function to generate questions
inquirer.prompt(
    [
        {
        type: 'input',
        message: 'What is your project title?',
        name: 'name',
        // make sure that the user inputs a value
        validate: (value)=> {if(value) {return true} else {return "please enter a value to continue"}},
        },
        {
        type: 'input',
        message: "How is your app installed?",
        name: 'instillation',
        validate: (value)=> {if(value) {return true} else {return "please enter a value to continue"}},    
        },
        {
            type: 'input',
            message: "What instructions need to be followed?",
            name: 'instructions',
            validate: (value)=> {if(value) {return true} else {return "please enter a value to continue"}},    
            },
            {
                type: 'input',
                message: "What was your motivation?",
                name: 'motivation',
                validate: (value)=> {if(value) {return true} else {return "please enter a value to continue"}},    
                },
                {
                    type: 'input',
                    message: "What problem does it solve?",
                    name: 'solution',
                    validate: (value)=> {if(value) {return true} else {return "please enter a value to continue"}},    
                    },
                    {
                        type: 'input',
                        message: "What did you learn?",
                        name: 'takeaway',
                        validate: (value)=> {if(value) {return true} else {return "please enter a value to continue"}},    
                        },
                       
    ]
)
.then ((answers) => {
    generateHTML(answers);
})
