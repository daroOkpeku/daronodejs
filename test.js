// require :- this is used to import a file to another file in node js 
let data = require('./people');

// if i console data without manully export array, function or variable it will show an empty objcet 
console.log(data.age, data.people,data.platform, data.folder);

let name = 'stephen';
// console.log(name);


// function greeting(name){
//     console.log(`Greeting ${name}`);
// }
// greeting('AYO Aji');
// greeting('fred');

//global objcet is just like window object in JavaScript which enables you to access setInterval setTimeout etc 
//the global object in node js is different from javascript window object
// setTimeout can be used without global.setTimeout
// global.setTimeout(()=>{
//     console.log('setTimeout consoled');
// },3150)


// setTimeout(()=>{
//     console.log('setTimeout consoled');
//     clearInterval(interval)
// },3150)

// let interval =  setInterval(()=>{
//     console.log('setInterval consoled');
// },1000)

// __dirname :- this is used to show the current directory of the  folders without the name on the path
// __filename :- this is used to show the current directory and the filename on the path
console.log(__dirname)
console.log(__filename)