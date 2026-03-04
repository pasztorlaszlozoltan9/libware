import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import CustomerController from '../controllers/customerController.js';
import BookController from '../controllers/bookController.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)
router.delete('/users/:id', [verifyToken], UserController.destroy)

router.get('/customers',[verifyToken], CustomerController.index);
// router.get('/customers/:id',[verifyToken], CustomerController.show);
router.post('/customers',[verifyToken], CustomerController.store);
router.put('/customers/:id',[verifyToken], CustomerController.update);
router.delete('/customers/:id',[verifyToken], CustomerController.destroy);

router.get('/books',[verifyToken], BookController.index);
// router.get('/books/:id',[verifyToken], BookController.show);
router.post('/books',[verifyToken], BookController.store);
router.put('/books/:id',[verifyToken], BookController.update);
router.delete('/books/:id',[verifyToken], BookController.destroy);

export default router
