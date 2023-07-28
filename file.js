// this method means file system this used to wite read delete files
const fs = require('fs');


// reading file in node
// fs.readFile('./docs/word.txt', (error, data)=>{
// //this method is asynchronous it take time to work
// if(error){
//     console.log(error);
// }
// // if you console.log data it will return buffer
// console.log(data.toString())
// })


//write files in node
// fs.writeFile('./docs/word.txt', 'hello word using node js', (error, data)=>{
//     // this method is used to string into already existing file
//     if(error){
//         console.log(error);
//     }

//     console.log('fille witten')
// })


// fs.writeFile("./docs/new.txt",  'write new thing here', (error, data)=>{
// // this method also create new files if you write in one that doesn't exist in directory with the strings
//     if(error){
//         console.log(error);
//     }

//     console.log('create a new file with strings')
// })


// how to create and delete directory
// if(!fs.existsSync('./zen')){
//     // fs.existsSync('./zen') this method is used to check if a directory or a file exists
//     fs.mkdir('./zen', (error)=>{
//         // this method is used to create new directory if you run the code and the directory exist already it return an error
//         if(error){
//             console.log(error);
//         }
//         console.log('new directory created successfully')
//     })
// }else{
//     fs.rmdir('./zen', (error)=>{
//         //fs.rmdir() this method is used to delete existing directories
//         if(error){
//             console.log(error);
//         }
//         console.log('delete directory')
//     })
// }

if(fs.existsSync('./zen/soon.txt')){
fs.unlink('./zen/soon.txt', (error)=>{
    // this method is used to delete existing files from a folder
    if(error){
        console.log(error);
    }
    console.log('file deleted successfully')
})
}



