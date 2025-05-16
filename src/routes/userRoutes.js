const express = require('express');
const {createUserController} = require('../user/userControllers/userControllers')
const {getAllUserController} = require('../user/userControllers/userControllers')

const router = express.Router();

router.post('/signup', createUserController)
router.get('/', getAllUserController)

module.exports = router