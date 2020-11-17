const inquirer = require('inquirer');

inquirer.prompt([
  { name: 'a', message: 'What is the name?', default: 'Nacho' },
  { name: 'a', message: 'What is the age?', default: 42 },
  { name: 'a', message: 'What is the size?', type: 'list', choices: ['xs', 'sm', 'md', 'lg', 'xl'] },
]).then(answers => {
  const { name, age, size } = answers;
  const str = `${name} is ${age} years old`;
  console.log(str);
});

// const [, , ...args] = process.argv;
// console.log(args);


// const fs = require('fs');

// fs.writeFile("output.txt", "Hellooooooo!", err => console.log(err));
// fs.writeFileSync("output.txt", "Nacho!");

// fs.readFile(
//   "output.txt",
//   { encoding: "UTF-8" },
//   (err, data) => {
//     if (err) console.error(err);
//     else console.log(data);
//   });
// const text = fs.readFileSync("output.txt", { encoding: "UTF-8" });
// console.log(text);


