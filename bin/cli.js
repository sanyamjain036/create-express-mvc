#!/usr/bin/env node
import  {execSync} from 'child_process';


const runCommand= command =>{
    try{
        execSync(`${command}`,{stdio:'inherit'});
    }
    catch(e){
        console.error(`\nFailed to execute ${command}`,e);
        return false;
    }
    return true;
}

const repoName= process.argv[2];

if(!repoName){
    console.log("Please specify the project directory:");
    console.log('\x1b[36m%s\x1b[0m'," npx create-express-mvc" + '\x1b[32m <project-directory>\x1b[0m')
    console.log("\nFor Example:");
    console.log('\x1b[36m%s\x1b[0m'," npx create-express-mvc" + '\x1b[32m my-app\x1b[0m');
    process.exit(-1);
}


const gitCheckoutCommand=`git clone --depth 1 https://github.com/sanyamjain036/create-express-mvc ${repoName}`
const installDepsCommand= `cd ${repoName} && npm install`;

console.log('\x1b[33m%s\x1b[0m',`\nClonning the repository with name ${repoName}`);

const checkOut=runCommand(gitCheckoutCommand);

if(!checkOut) {
    console.log('\x1b[31m%s\x1b[0m', 'Some error occured while clonning repository!');  
    process.exit(-1);
}

console.log('\x1b[35m%s\x1b[0m',`Installing dependencies for ${repoName}`);

const installedDeps=runCommand(installDepsCommand);

if(!installedDeps) {
    console.log('\x1b[31m%s\x1b[0m', 'Some error occured while installing dependencies!');  
    process.exit(-1);
}

console.log('\x1b[32m%s\x1b[0m',"\nCongratulations! You are ready. Follow the following commands to start");

console.log(`cd ${repoName} && npm start`);

console.log("\nHAPPY HACKING!")