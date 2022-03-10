const router = require('express').Router();
const authCtrl = require('../controllers/authController')

router.route('/signin')
  .post(authCtrl.signin)
router.route('/signout')
  .get(authCtrl.signout)



module.exports = router;