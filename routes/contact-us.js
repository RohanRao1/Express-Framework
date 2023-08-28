const express = require('express')
const path = require('path')

const router = express.Router()
const rootDir = require("../util/path");
const contactController = require('../controllers/contactus')


router.get('/contact-us', contactController.getMsg)

router.post('/success', contactController.postMsg)

module.exports = router