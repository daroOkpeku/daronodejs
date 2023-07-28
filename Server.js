// creating a Server on node js

const http = require('http');
 const fs = require('fs')
 const loddash = require('lodash')
let server = http.createServer((request, response)=>{
// request.url this is used to get the user current url
// request.method this is used to know what method is being used eg GET or POST
// console.log(request.url, request.method)
response.setHeader('Content-Type', 'text/html');
// response.write('<head> <link rel="stylesheet" href="#" /> </head>');
// response.write('<p>hello the first time</p>');
// response.write('<p>hello world</p>');
let randomx =  loddash.random(0, 50)
console.log(randomx)

let answer = loddash.once(function greet(){
    console.log('hello world you')
})

answer();
 
 // console.log(request.url)
  let path ;
//  switch (request.url) {
//     case '/':
//       path += 'index.html'  
//      break;
//      case '/about':
//         path = 'about.html'
//     default:
//         path += '404.html'
//         break;
//  }

//  console.log(path)
 
if(request.url == '/about.html'){
 path = 'views/about.html';
 response.statusCode = 200;
}else if(request.url == '/'){
    path = 'views/index.html';
    response.statusCode = 200;
}else if(request.url  == '/about-me.html'){
 
   response.writeHead(301,{
    // this method is used to redirect to another page
   Location : 'http://localhost:3000/about.html'
   })
   response.end();

}
else{
    path = 'views/404.html';   
    response.statusCode = 404;
}

fs.readFile(path, (error, data)=>{
    if(error){
        console.log(error)
    }else{
       // response.write(`<p>${path}</p>`)
        response.write(data);
        response.end();
    // response.end(data); this is only used when send a single file
      //  response.end(data);
    }
})

});


server.listen(3000, 'localhost', ()=>{
console.log('i am listening');
});
 

