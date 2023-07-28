const people = ['stephen', 'okpeku', 'ighodaro', 'jason'];
const age = [20, 21, 22, 23, 24, 25];
console.log(people)
//os is the operating system of the computer 
// this method is used to get information about the operating system
const os = require('os');
os.platform();
os.homedir();
// this is used to get the operating system os.platform();
// this is used to get home directory
// this is how to export an array, function or variable
// module.exports = people in this example you are only exporting one array
module.exports = {people:people, age:age, platform:os.platform(), folder:os.homedir()};