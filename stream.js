const fs = require('fs');

// fs.createReadStream :- this function is used to read large files 
// {encoding:'utf-8'} :- this is used to change the bruffer into string format
let readsttream = fs.createReadStream('./docs/blog4.txt', {encoding:'utf-8'});
// createWriteStream :- this function is used to write large files
let writestream = fs.createWriteStream('./docs/blog3.txt')


// readsttream.on('data', (info)=>{
//     // readsttream.on :- this is an event used to read stream data which is called data event
//  //  writestream.write() this method is used to write stream data
//    writestream.write('\n---New Info---\n');
//    writestream.write(info)
// })


// pipping stream 
//pipe method is a short syntax of  readsttream.on('data')
readsttream.pipe(writestream)