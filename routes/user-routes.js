const Router = require('express')
const router = new Router()

const userController = require('../controllers/user-controller')


router.get('/users', userController.getUsers)
router.get('/profiles', userController.getProfiles)
router.post('/updateDone', userController.updateDone)

module.exports = router