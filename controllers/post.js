const Post = require('../models').Post;
const User = require('../models').User;
const Comment = require('../models').Comment;

const constants = require('../constants');

const getAllPosts = (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'body', 'likes', 'userId', 'img'],
    })
    .then(allPosts => {
        res.status(constants.SUCCESS).json(allPosts)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getAllComments = (req, res) => {
    Comment.findAll({
        attributes: ['id', 'body', 'likes', 'userId', 'postId'],
    })
    .then(allPosts => {
        res.status(constants.SUCCESS).json(allPosts)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getPostById = (req, res) => {
    Post.findByPk(req.params.postId)
    .then(foundPost => {
        if(foundPost === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
        }else{
            res.status(constants.SUCCESS).json(foundPost)
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const createPost = (req, res) => {
    req.body.userId = req.user.id;

    Post.create(req.body)
    .then(newPost => {
        res.status(constants.SUCCESS).json(newPost)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const createComment = (req, res) => {
    req.body.userId = req.user.id;

    Comment.create(req.body)
    .then(newPost => {
        res.status(constants.SUCCESS).json(newPost)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getPostsByUser = (req, res) => {
    Post.findAll({
        where: {
            userId: req.user.id
        },
        attributes: ['id', 'title', 'body', 'userId', 'likes', 'img'],
    })
    .then(allPosts => {
        res.status(constants.SUCCESS).json(allPosts)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editPost = (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.postId
        },
        returning: true
    })
    .then(updatedPost => {
        if(updatedPost[0] === 0){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
        }else{
            Post.findByPk(req.params.postId, {
                include: [
                    {
                        model: User,
                        attributes: ['id', 'username']
                    }
                ]
            })
            .then(foundPost => {
                if(foundPost === null){
                    res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
                }else{
                    res.status(constants.SUCCESS).json(foundPost)
                }
            })
            .catch(err => {
                res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
            })
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const deletePost = (req, res) => {
    Post.findByPk(req.params.postId)
    .then(foundPost => {
        if(foundPost.userId === req.user.id){
            Post.destroy({
                where: {id: req.params.postId}
            })
            .then(() => {
                res.status(constants.SUCCESS).send('success')
            })
        } else {
            res.status(constants.FORBIDDEN).send('ERROR: Post not created by User')
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    createPost,
    createComment,
    getPostsByUser,
    getAllPosts,
    getAllComments,
    deletePost,
    editPost,
    getPostById
}