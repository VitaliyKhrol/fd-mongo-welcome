const {Router} = require('express');
const PostController = require('../controllers/post.controller');
const postRouter = Router();
const multer  = require('multer');
const path = require('path');

const imagePath = path.resolve(__dirname, '../public/images');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb (null, imagePath)
    },
    filename: function (req, file, cb) {
        cb(null,`${Date.now()}.${file.originalname}`)
      }
    
})
const upload = multer({storage});

postRouter.post('/:userId', PostController.createPost);
postRouter.get('/', PostController.getAllPost);
postRouter.get('/:postId', PostController.getOnePost);
postRouter.patch('/:postId', upload.single('postImage'), PostController.createPostImages);

module.exports = postRouter;