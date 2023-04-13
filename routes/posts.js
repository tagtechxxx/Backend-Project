const express= require('express') 
const router =express.Router();
const{getPost,createPost,updatePost,deletePost, likePost} = require('../controllers/post');
router.get('/', getPost)
router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/likePost', likePost)

module.exports= router