const express = require('express');
const {createUserController, 
    getAllUserController, 
    updateUserController,
    getUserDeactivedControllers
    } = require('../user/userControllers/userControllers')


const router = express.Router();

router.post('/signup', createUserController)
router.get('/', getAllUserController)
router.get('/deactived', getUserDeactivedControllers)
router.put('/:id', updateUserController)


module.exports = router