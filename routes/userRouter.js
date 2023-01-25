const {Router} = require('express');
const UserController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getAll);
userRouter.get('/:userId', UserController.getOne);
userRouter.delete('/:userId', UserController.deleteUser);
userRouter.put('/:userId', UserController.updateUser);

module.exports = userRouter;