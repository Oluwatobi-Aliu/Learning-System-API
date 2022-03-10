const router = require('express').Router();

const courseCtrl = require('../controllers/courseController')
const userCtrl = require('../controllers/userController')
const authCtrl = require('../controllers/authController')


router.route('/published')
  .get(courseCtrl.listPublished)

router.route('/by/:userId')
  .post(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.isEducator, courseCtrl.create)
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, courseCtrl.listByInstructor)


router.route('/:courseId/lesson/new')
  .put(authCtrl.requireSignin, courseCtrl.isInstructor, courseCtrl.newLesson)

router.route('/:courseId')
  .get(courseCtrl.read)
  .put(authCtrl.requireSignin, courseCtrl.isInstructor, courseCtrl.update)
  .delete(authCtrl.requireSignin, courseCtrl.isInstructor, courseCtrl.remove)

router.param('courseId', courseCtrl.courseByID)
router.param('userId', userCtrl.userByID)


module.exports = router;