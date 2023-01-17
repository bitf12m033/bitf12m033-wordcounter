#! /usr/bin/env node

import inquirer from "inquirer";
import chalkAnimation from "chalk-animation"

const sleep = () => {
    return new Promise((res)=> {
        setTimeout(res,2000)
    })
}
async function welcome() {
    let title = chalkAnimation.rainbow('Lets start calculator');
    await sleep();
    title.stop();
}
await welcome();
async function askQuestion() {
    const answer = await inquirer
    .prompt([
        /* Pass your questions in here */
       
        {
            type:"string",
            name:"txt",
            message:"Enter Text"
        }
    ])
    
    const {txt} = answer;
    let regex = /\S/g; 
    console.log('Characters Count',txt.split(regex).length - 1);
    console.log('Words Count',txt.trim().split(/\s+/).length);
}

async function restart() {
    do {
        
        await askQuestion();
        var inp = await inquirer.prompt([
            {
                type:"input",
                name:"choice",
                message:"Do you want to start again? enter y/n"
            }
        ])
    }while(inp.choice === 'y');
}
restart();