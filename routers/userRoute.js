const express = require('express')

const controller = require('../controllers/userController')

const router = express.Router()

router.get('/', controller.index)

router.get('/login', controller.login)

router.get('/cart', controller.cart)

router.get('/methodPayment', controller.methodPayment)

router.get('/register', controller.register)

router.get('/shipDetail', controller.shipDetail)

router.get('/showProduct', controller.showProduct)

module.exports = router;