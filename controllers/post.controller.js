const {Post} = require('../models');

module.exports.createPost = async(req, res, next) => {
    try {
        const {body, params: {userId}} = req;
        const createdPost = await Post.create({...body, author: userId});
        res.status(201).send(createdPost);
    } catch(error) {
        next(error);
    }
}


module.exports.getAllPost = async(req, res, next) => {
        try {
            const {query: {limit, skip}} = req;
            const allPosts = await Post.find().populate('author').limit(limit).skip(skip);
            res.status(200).send(allPosts);
        } catch(error) {
            next(error)
        }
}

module.exports.getOnePost = async(req, res, next) => {
    try {
        const {params: {postId}} = req;
        const onePost = await Post.findById(postId).populate('author');
        res.status(200).send(onePost);
    } catch(error) {
        next(error)
    }
}

module.exports.createPostImages = async(req, res, next) => {
    try {
        const {params: {postId}, file:{filename}} = req;
        console.log(filename);
        const onePost = await Post.findByIdAndUpdate(postId,{imgSrc:filename},{returnDocument:'after'});
        res.status(200).send(onePost);
    } catch(error) {
        next(error)
    }
}
