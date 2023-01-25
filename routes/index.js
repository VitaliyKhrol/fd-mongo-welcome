const {Router} = require('express');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');

const rootRouter = Router();

rootRouter.use('/users', userRouter);
rootRouter.use('/posts', postRouter);

module.exports = rootRouter;