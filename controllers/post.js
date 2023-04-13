const mongoose = require('mongoose');
const PostMesage = require('../models/postMessage');

 const getPost = async (req, res) => {
try {
   const PostMessages = await PostMesage.find();
   res.status(200).json(PostMessages);
}catch(error) {
  res.status(404).json({messages: error.message});
}
}


   const createPost = async(req, res) => {

    const post = req.body;
  
    const newPost = new PostMesage(post);
    try {
      await newPost.save();
      res.status(201).json(newPost);
  
    } catch (error) {
      res.status(404).json({messages: error.message});
    }
  }

    const updatePost = async(req, res) => {

      const {id: _id} = req.params;

      const post = req.body;

      if( !mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id');

      const updatedPost = await PostMesage.findOneAndUpdate(_id, {...post, _id},
        {new: true});

        res.json(updatedPost);
      }

   const deletePost = async(req, res) => {
    const {id: _id} = req.params;

    if( !mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id');
    await PostMesage.findByIdAndDelete(id);

    res.json({messages: 'Post deleted successfully'});
  }

     const likePost = async(req, res)=>{
    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id');
    await PostMesage.findByIdAndDelete(id);
    const post = await PostMesage.findByIdAndUpdated(id, {LikeCount: post.likeCount + 1},
    {new: true});

    res.json(updatePost);

  }

module.exports ={
  createPost,updatePost,likePost,deletePost,getPost 
}





