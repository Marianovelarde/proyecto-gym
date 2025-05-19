const express = require('express');
const {createUserController, 
    getAllUserController, 
    updateUserController} = require('../user/userControllers/userControllers')


const router = express.Router();

router.post('/signup', createUserController)
router.get('/', getAllUserController)
router.put('/:id', updateUserController)


module.exports = router