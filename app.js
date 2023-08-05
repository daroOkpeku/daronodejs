const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Blog = require('./model/blog')
const {findone, singleone}  = require('./Controller/viewController')
const {addtoBlog, delone} = require('./Controller/postController');
const DBname = 'nodejs'
const DBURL =  "mongodb+srv://stephendaro:jason007@cluster0.zxje8qe.mongodb.net/nodejs?retryWrites=true&w=majority";
// mongoose.connect(DBURL,{ useNewUrlParser: true, useUnifiedTopology:true })
// .then(result=>console.log('connected to database'))
// .catch(err=>console.log('error connecting to database'))

try {
    //connecting to Database 
 mongoose.connect(DBURL,{ useNewUrlParser: true, useUnifiedTopology:true  })
    console.log('conected') 
    app.listen(3000)
} catch (error) {
    console.log(error)
}


app.use(
   // this middleware enable the frontend to send form data to the backend
   express.urlencoded({extended:true})
   );

// morgan :- package is used to vaildate form, session or cookies on the application
const morgan = require('morgan');
// register ejs 
// ejs is an template engine in expreess which has to be registered in an express app
app.set('view engine', 'ejs');
// this line of code app.set('views', 'myviews') is used to location the views folder if the your views folder is not
// named views 
// app.set('views', 'myviews')

// app.get('/', (request,  response)=>{
//     // response.send('<p>Welcome</p>');
//     response.sendFile('./views/index.html', {root:__dirname});
// })


// app.get('/about', (request,  response)=>{
//    // response.send('<p>about</p>');
// response.sendFile('./views/about.html', {root:__dirname});
// })

// app.get('/404', (request,  response)=>{
//    // response.send('<p>404</p>');
//    response.sendFile('./views/404.html', {root:__dirname});
// })

// // redirect in express
// app.get('/about-us', (request, response)=>{
//     response.redirect('/about')
// })

// static files 
// this middleware allow the application to has access to css files, images, etc 
// public folder must be created in the application and all the css and image file be move there so that
// the application can access it
app.use(express.static('public'))
// static files end

app.use(morgan('dev'))



// ejs routes
// app.use((request, response, next)=>{
//     // this is a middelware
//     console.log('hostname', request.hostname)
//     console.log('path', request.path)
//     console.log('method', request.method)
//     //  next() this allow the webpage to ridirect to the next page
//   next();
// })
// app.use((request, response, next)=>{
//     // this is a middelware
//     console.log('next middleware',)
//   next();
// })




// app.get('/first', (request,  response)=>{
//     const blogs = [
//         {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//       ];

//     // response.send('<p>404</p>');
//     // {title:'index'} this how to pass data into the view page
//     response.render('first', {title:'index', blogs:blogs})
//  })

app.get('/first', findone)

 app.get('/save_data', (request, response) => {

    const blog = new Blog({
        // this is how to save data in database
        title:'First Story',
        snippet:'let talk about anything',
        body:'shdjjhdjhd djhdhjdhj'
    })
    blog.save().then((result)=>response.send(result))
    .catch((err)=>response.send(err))
 })

 app.get('/fetch_blogs', (request, response)=>{
//   this method is used to fetch all data from the database
Blog.find().then((result)=>response.send(result))
.catch((err)=>response.send(err))

 })

 app.get('/blog/:id', singleone)
 app.delete('/blog/:id', delone)

 app.get('/single-data', (request, response)=>{
    // this is to find a row in the database
    Blog.findById('64c5355bd9755d3603f86b9e')
    .then((result)=>response.send(result))
    .catch((err)=>response.send(err))
 })

 app.post('/blog', addtoBlog)


 app.get('/aboutblog', (request,  response)=>{
    // response.send('<p>404</p>');
    response.render('aboutblog', {title:'aboutblog'})
 })

 app.get('/blogs/create', (request,  response)=>{
    // response.send('<p>404</p>');
   
    response.render('create', {title:'create'})
 })

 app.use((request, response)=>{
    response.status(404).render('error', {title:'error'});
})

// ejs routes end

 // 404 page for  html pages
// app.use((request, response)=>{
//     response.status(404).sendFile('./views/404.html', {root:__dirname});
// })

 


