const fs = require('fs');
const inquirer = require('inquirer');
//const writeFile = require('./src/generateSite')
const Manager = require ("./lib/Manager");
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template');

const allEmployees = [];

const managerQuestions = () => {
    return inquirer.prompt ([

        {
            type: 'confirm',
            name: 'manager',
            message: 'Please confirm that you are a manager.',
        },
        {
            type: 'input',
            name: 'name',
            message: "Name?",
            when: ({ manager }) => {
                if (manager) {
                    return true;
                } else {
                    console.log("Please contact manager!")
                    process.exit();
                }
                }
        },
        {
            type: 'input',
            name: 'id',
            message: "ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Office Number?',
        },
    ])

    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        allEmployees.push(manager);
        employeeAdd();
    })
};

const employeeAdd = () => {
    inquirer.prompt ([
       {
            type: 'list',
            name: 'employeeAdd',
            message: "Would you like to add another employee?",
            choices: ['Engineer', 'Intern', "Finish"]
        },
    ])
    
    .then(answer => {
        switch(answer.employeeAdd) {
            case "Engineer":
                engineerQuestions()
                break;
            case "Intern":
                internQuestions()
                break;
            default:
                writeFile();
                console.log(allEmployees);
                
        }
    })
}

const engineerQuestions = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
         message: "Engineer Name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "Engineer ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: 'Engineer Email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Engineer Github UserName?'
    }, 
])

.then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    allEmployees.push(engineer);
    employeeAdd();
})

}

const internQuestions = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: "Intern Name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "Intern ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: 'Intern Email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Intern School Name?'
    },
    
    ])

    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        allEmployees.push(intern);
        employeeAdd();
    })
}

managerQuestions();

const writeFile = () => {
    fs.writeFile('./index.html', JSON.stringify(allEmployees), err => {
        if (err) throw err;
      
        console.log('Team Profile complete!');
      });
    }

//loops thru emp array and create cards 


