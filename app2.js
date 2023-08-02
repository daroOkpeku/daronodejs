const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')
const {check,  validationResult} = require('express-validator');
const {signup_vaildate, signin_vaildate} = require('./validation/sigup_validate')
const {userRegister, login} = require('./Controller/postController')
const session = require('express-session')
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
app.use(morgan('short'));
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))

app.get('/register', (request, response)=>{
response.render('register', {title:'register'})
})

app.get('/login', (request, response)=>{
    response.render('login', {title:'login'})
})

app.post('/register', signup_vaildate, userRegister)

app.post('/login', signin_vaildate, login)

app.get('/checklog', (request, response) => {
    if(request.session.loggedin){
      response.send(`${request.session.loggedin}  ${request.session.username}`)
    }else{
        console.log('nothing')
    }
})
