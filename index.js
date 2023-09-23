#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from "url";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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


// The third argument will be the project name.
const repoName = process.argv[2];
if(!repoName){
  console.log("Please specify the project directory:");
  console.log('\x1b[36m%s\x1b[0m'," npx create-express-mvc" + '\x1b[32m <project-directory>\x1b[0m')
  console.log("\nFor Example:");
  console.log('\x1b[36m%s\x1b[0m'," npx create-express-mvc" + '\x1b[32m my-app\x1b[0m');
  process.exit(-1);
}


// Create a project directory with the project name.
const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, repoName);
fs.mkdirSync(projectDir, { recursive: true });

// create a `template` folder which will house the template
// and the files we want to create and paste it to projectDir
const templateDir = path.resolve(__dirname, 'template');
fs.cpSync(templateDir, projectDir, { recursive: true });

// It is good practice to have dotfiles stored in the
// template without the dot (so they do not get picked
// up by the starter template repository). We can rename
// the dotfiles after we have copied them over to the
// new project directory.
fs.renameSync(
  path.join(projectDir, 'gitignore'),
  path.join(projectDir, '.gitignore')
);

const projectPackageJson = require(path.join(projectDir, 'package.json'));

// Update the project's package.json with the new project name
projectPackageJson.name = repoName;

fs.writeFileSync(
  path.join(projectDir, 'package.json'),
  JSON.stringify(projectPackageJson, null, 2)
);

console.log('\x1b[35m%s\x1b[0m',`Installing dependencies for ${repoName}`);

const installDepsCommand= `cd ${repoName} && npm install`;
const installedDeps=runCommand(installDepsCommand);

if(!installedDeps) {
    console.log('\x1b[31m%s\x1b[0m', 'Some error occured while installing dependencies!');  
    process.exit(-1);
}

console.log('\x1b[32m%s\x1b[0m',"\nCongratulations! You are ready. Follow the following commands to start");

console.log('\x1b[36m%s\x1b[0m',`cd ${repoName} && npm start`);

console.log('\nHAPPY HACKING!');
