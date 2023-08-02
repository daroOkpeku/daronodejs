const Blog = require('../model/blog')
const User = require('../model/user')
const bcrypt = require('bcrypt')
const {  validationResult} = require('express-validator');
const { findone } = require('./viewController');

function addtoBlog(request, response){
const blog = new Blog({
    title:request.body.title,
    snippet:request.body.snippet,
    body:request.body.body
})

blog.save().then(result=>{
    response.redirect('/first');
}).catch(error=>console.log(error))
}


function delone(request, response){
    const id = request.params.id;
    //console.log(id)
  Blog.findByIdAndDelete(id).then(result=>{
      response.json('success');
  }).catch(error=>console.log(error))
}

async function userRegister(request, response, next){
    //console.log(request.body)
    const error = validationResult(request);
    console.log(error.array())
    if(!error.isEmpty()){

    response.render('register', {title:'register', data:error.array(), message:'error'})

    }else{

        if(request.body.password == request.body.confirm_pass ){
                  user = await User.findOne({'email':request.body.email})
                    if(!user){
                        const bcryptpass = await bcrypt.hash(request.body.password, 10)
                        const user = new User({
                            firstname:request.body.firstname,
                            lastname:request.body.lastname,
                            email:request.body.email,
                            password:bcryptpass,
                        })
                        user.save().then(result=>{
                            console.log(result)
                        }).catch(error=>{
                            console.log(error)
                        })
                        response.render('register', {title:'register', data:error.array()}) 
                        next();
                    }else{
                        response.render('register', {title:'register', data:'sorry this email is already exist'})    
                    }
        }else{
            response.render('register', {title:'register', data:'please enter the password'})
            next();  
        }
        
        
    }
}


async function login (request, response, next){

    user = await User.findOne({'email':request.body.email})
    comparepass = await bcrypt.compare(request.body.password, user.password)
    if(user && comparepass){
       request.session.loggedin  = true;
       request.session.username = user.firstname+" "+user.lastname
       console.log('we are logged in')
        response.redirect('checklog');
    }else{
        console.log('please insert your detail correctly')
    }

}

module.exports = {addtoBlog: addtoBlog, delone: delone, userRegister:userRegister, login:login}