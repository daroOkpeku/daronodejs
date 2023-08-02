const {check,  validationResult} = require('express-validator');


 const signup = [
        check('firstname', 'This firstname is required and must have 3+')
        .exists().isLength({min:3}),
        check('email', 'This email is required and must')
        .exists()
        .isEmail().normalizeEmail(),
        check('password', 'Password must be greater than 8 with symbol and a number').isLength({min:8, max:20}).matches(/^[A-Za-z0-9 #$@^&*.,'!&]+$/), 
        //check('confirm_pass', 'Password must be greater than 8 with symbol and a number').isArray({min:8, max:20, }),
       
        ]

const signin_vaildate = [
        check('email', 'This email is required and must')
        .exists()
        .isEmail().normalizeEmail(),
        check('password', 'Password must be greater than 8 with symbol and a number').isLength({min:8, max:20}).matches(/^[A-Za-z0-9 #$@^&*.,'!&]+$/),   
]

module.exports = {signup_vaildate:signup, signin_vaildate:signin_vaildate}