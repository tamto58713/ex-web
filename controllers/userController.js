module.exports = {
    "index": (req,  res) => {
        res.render('user', {isUser: true, isLoggedin: true});
    },
    "login": (req,  res) => {
        res.render('user/login', {isUser: true});
    },
    "cart": (req, res) => {
        res.render('user/cart', {isUser: true, isLoggedin: true})
     }
    ,
    "methodPayment": (req,  res) => {
        res.render('user/methodPayment', {isUser: true, isLoggedin: true});
    },
    "register": (req,  res) => {
        res.render('user/register', {isUser: true, isLoggedin: true});
    },
    "shipDetail": (req,  res) => {
        res.render('user/shipDetail', {isUser: true, isLoggedin: true});
    },
    "showProduct": (req,  res) => {
        res.render('user/showProduct', {isUser: true, isLoggedin: true});
    }
}