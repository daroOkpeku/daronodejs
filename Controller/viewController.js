const Blog = require('../model/blog')



function findone(request, response){
    Blog.find().sort({'createdAt': -1}).then((result)=>{
        response.render('first', {title:'index', blogs:result})
    })
 .catch((err)=>{
  response.render('create', {title:'create'})
 })
}



function singleone(request, response){
    const id = request.params.id
   Blog.findById(id).then(result=>{
   console.log(result)
     response.render('blog_detail', {title:'detaill', data:result});
   }).catch((err)=>{
    response.render('create', {title:'create'})
   })
}



module.exports = {findone:findone, singleone:singleone}