const express = require('express')

const controller = require('../controllers/adminController')

const router = express.Router()

router.get('/', (req, res) => {
   res.send('Hello User');
})

module.exports = router;