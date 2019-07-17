const express = require('express')

const controller = require('../controllers/adminController')

const router = express.Router()

router.get('/', controller.index)
router.get('/login', controller.login)
router.get('/addCategory', controller.addCategory)
router.get('/editCategory', controller.editCategory)
router.get('/products', controller.products)
router.get('/addProduct', controller.addProduct)
router.get('/editProduct', controller.editProduct)
module.exports = router;

