const router = require('express').Router();

const userCtrl = require('../controllers/userController')
const authCtrl = require('../controllers/authController')

router.route('/')
  .get(userCtrl.list)
  .post(userCtrl.create)

router.route('/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)


module.exports = router;