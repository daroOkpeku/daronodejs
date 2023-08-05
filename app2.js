const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')
const loddash = require('lodash')
const {check,  validationResult} = require('express-validator');
const {signup_vaildate, signin_vaildate} = require('./validation/sigup_validate')
const {userRegister, login} = require('./Controller/postController')
const session = require('express-session')
const store = session.MemoryStore();
const Mongostore = require("connect-mongo")
try {
    //connecting to Database 
 const DBURL =  "mongodb+srv://username:password@cluster0.zxje8qe.mongodb.net/nodejs?retryWrites=true&w=majority";
 mongoose.connect(DBURL,{ useNewUrlParser: true, useUnifiedTopology:true  })
    console.log('conected') 
    app.listen(3000)
} catch (error) {
    console.log(error)
}


app.set('view engine', 'ejs')
app.set('views', 'views');
app.use(morgan('short'));
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(session({
	secret: 'NoDE JS',
    resave:false,
    // saveUninitialized has to be set  false if not it going to be generating new session id every time you login 
	saveUninitialized:true,
    store:Mongostore.create({
        mongoUrl:'mongodb+srv://stephendaro:jason007@cluster0.zxje8qe.mongodb.net/nodejs?retryWrites=true&w=majority'
    }),
    //cookie:{secure:true}
}))

// app.get('/', (request, response, next)=>{
//     console.log(`${request.method} ${request.url}`)
//     console.log(store)
//     next();
// })

app.get('/register', (request, response)=>{
response.render('register', {title:'register'})
})

app.get('/login', (request, response)=>{
  
    response.render('login', {title:'login'})
})


app.post('/register', signup_vaildate, userRegister)

app.post('/login', signin_vaildate, login)

app.get('/checklog', (request, response) => {
    if(request.session.authenticated){
  
       console.log(request.session)
    }else{
        console.log('nothing')
    }
})


app.get('/logout', (request, response)=>{
    request.session.destroy()
})


app.get('/update', (request, response)=>{
//update session
    request.session.reload((err)=>{
        response.render('/test', {'name':'stephen'});
    })
})

