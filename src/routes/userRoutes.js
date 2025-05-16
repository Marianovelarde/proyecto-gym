const express = require('express');
const {createUserController} = require('../user/userControllers/userControllers.js')

const router = express.Router();

router.post('/signup', createUserController)

module.exports = router