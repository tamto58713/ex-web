module.exports = {
    "index": (req, res) => {
        res.render('admin', {isAdmin: true, isLoggedin: true})
    },
    "login": (req, res) => {
        res.render('admin/login',  {isAdmin: true})
    },
    "addCategory": (req, res) => {
        res.render('admin/addCategory', {isAdmin: true, isLoggedin: true})
    },
    "editCategory": (req, res) => {
        res.render('admin/editCategory', {isAdmin: true, isLoggedin: true})
    },
    "products": (req, res) => {
        res.render('admin/products', {isAdmin: true, isLoggedin: true})
    },
    "addProduct": (req, res) => {
        res.render('admin/addProduct', {isAdmin: true, isLoggedin: true})
    },
    "editProduct": (req, res) => {
        res.render('admin/editProduct', {isAdmin: true, isLoggedin: true})
    }
}