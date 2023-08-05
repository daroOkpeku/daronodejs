const nodemaller = require('nodemailer');
const ejs = require('ejs')
const fs = require('fs');


const transport = nodemaller.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7ce91ee7c8e14c",
      pass: "f9818ba3726173"
    }
  });

  const sendmail = (recevicer, subject, content, name)=>{

  
 const filePath = '../learning node js/email_temp/register.ejs';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const renderedHTML = ejs.render(data,  {recevicer:recevicer, subject:subject, name:name, content:content})

    const mailler_option ={
        from:'zenstreamlive@gmail.com',
        to:recevicer,
        subject:subject,
        html:renderedHTML,
    }
    transport.sendMail(mailler_option, (error, info)=>{
        if(error){
          console.log("second error"+error)
        }
        console.log('Message sent'+info.messageId )
    })

  console.log(renderedHTML);
});
       
    // ejs.renderFile('../email_temp/register.ejs', {recevicer:recevicer, subject:subject, name:name, content:content}, (err, data)=>{

      
 //   });

  }

  module.exports = {sendmail:sendmail}