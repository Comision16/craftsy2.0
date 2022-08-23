const {loadUsers, storeUsers} = require('../data/db');
const {validationResult} =require('express-validator');
const bcryptjs = require('bcryptjs');

module.exports = {
     register : (req,res) => {
        return res.render('register',{
            title: 'Register'
        })
    },
    processRegister : (req,res) => {

        let errors = validationResult(req);

        if(errors.isEmpty()){
            const {name,surname,email,password,username} = req.body;
            let users = loadUsers();
    
            let newUser = {
                id : users.length > 0 ? users[users.length - 1].id + 1 : 1,
                name :name.trim(),
                surname : surname.trim(),
                email : email.trim(),
                password : bcryptjs.hashSync(password,12),
                username : username.trim()
            }
    
            let usersModify = [...users, newUser];
    
            storeUsers(usersModify)
    
            return res.redirect('/users/login')
        }else{
            return res.render('register',{
                title: 'Register',
                errors : errors.mapped(),
                old : req.body
            })
        }
    },
    login : (req,res) => {
        return res.render('login',{
            title: 'Login'
        })
    },
    processLogin : (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            return res.redirect('/users/profile')
        }else {
            return res.render('login',{
                title: 'Login',
                errors : errors.mapped()
            })
        }
    },
   
    profile : (req,res) => {
        return res.render('profile',{
            title: 'Profile'
        })
    }
}