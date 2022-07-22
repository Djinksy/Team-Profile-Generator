const generateHTML = require('./src/generateHTML');

//profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

const newManager = () => {
    return inquirer.prompt ([
        {
            type:'input',
            name: 'name',
            message: 'What is the managers name?',
        },
        {   type:'input',
            name: 'id',
            message: 'Please enter the managers id',

        },
        {
            type:'input',
            name:'email',
            message:'Please enter the managers email',
        },
        {
            type: 'input',
            name:'officeNumber',
            message: 'Please enter the managers office number',
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = addManager (name,id,email,officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    ================
    Adding employees to the team
    ================`);

    return inquirer.prompt ([
        {
            type:'list',
            name:'role',
            message:'Please choose new employee role',
            choices: ['Engineer','Intern']
        },
        {
            type:'input',
            name:'name',
            message:"What's the name of the employee",
        },
        {
           type:'input',
           name:'id',
           message:'Please enter the employee id',
        },
        {
            type:'input',
            name:'email',
            message:'Please enter the employee email',
        },
        {
            type:'input',
            name:'github',
            message:"Please enter the employee's github",
        },
        {
            type:'input',
            name:'school',
            message:"Please enter the intern's school",
            //when: (input) => input.role === "Intern",
        },

    ])
}