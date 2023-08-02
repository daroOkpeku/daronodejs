let original = window.location.origin
let del = document.querySelector('.delete');
console.log(del)

del.addEventListener("click", function(e){
    e.preventDefault();

   let headers = new Headers();
   headers.append('Content-Type', 'application/json')
   let url = `${original}/blog/${del.dataset.doc}`
   axios.delete(url, headers)
   .then(res=>{
    console.log(res)
     if(res.data){
        window.location.href = `${original}/first`;
     }
   }).catch(err=>{
    console.log(err)
   })
})