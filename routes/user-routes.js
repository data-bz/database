const Router = require('express')
const router = new Router()

const userController = require('../controllers/user-controller')


router.post('/users', userController.getUsers)
router.post('/profiles', userController.getProfiles)

module.exports = router