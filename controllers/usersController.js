module.exports = {
    login : (req,res) => {
        return res.render('login',{
            title: 'Login'
        })
    },
    register : (req,res) => {
        return res.render('register',{
            title: 'Register'
        })
    },
    profile : (req,res) => {
        return res.render('profile',{
            title: 'Profile'
        })
    }
}