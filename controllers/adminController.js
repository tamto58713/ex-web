module.exports = {
    "index": (req, res) => {
        res.render('admin', {isAdmin: true})
    },
    "login": (req, res) => {
        res.render('admin/login',  {isAdmin: true})
    },
    "addCategory": (req, res) => {
        res.render('admin/addCategory', {isAdmin: true})
    },
    "editCategory": (req, res) => {
        res.render('admin/editCategory', {isAdmin: true})
    },
    "products": (req, res) => {
        res.render('admin/products', {isAdmin: true})
    },
    "addProduct": (req, res) => {
        res.render('admin/addProduct', {isAdmin: true})
    },
    "editProduct": (req, res) => {
        res.render('admin/editProduct', {isAdmin: true})
    }
}