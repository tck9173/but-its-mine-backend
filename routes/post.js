const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.post.getAllPosts);
router.get('/comments', ctrl.post.getAllComments);
router.post('/', ctrl.post.createPost);
router.post('/comments', ctrl.post.createComment);
router.get('/user', ctrl.post.getPostsByUser);
router.get('/:postId', ctrl.post.getPostById);
router.delete('/:postId', ctrl.post.deletePost);
router.put('/:postId', ctrl.post.editPost);

module.exports = router;