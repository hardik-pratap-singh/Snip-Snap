const Posts = require("../models/Posts");
const User = require("../models/User");


const getallposts = async (req, res) => {
    try {
        const posts = await Posts.find()
        const count = posts.length;
        res.status(200).json({
            "success":true,
            count,
            posts
        })
    } catch (error) {
        console.log(error)
    }
}

const addpost = async (req, res) => {

    try {
        const { video, desc } = req.body;
        const user = req.user._id;

        const postData = await Posts.create({ video, desc, user })
        const post = await Posts.findOne({ _id: postData._id }).populate('user', '-password')

        res.status(200).json({
            "success" : true  , 
            post
        })
        
    } catch (error) {
        console.log(error)
    }

}

const deletepost = async (req, res) => {
    const idtodelete = req.params.id;

    const post = await Posts.findByIdAndDelete(idtodelete);

    if (!post) res.status(404).json({ "error": "Post Not Found ! " });

    res.status(200).json({
        "success": true,
        post
    })
}

const getuserpost = async (req, res) => {
    const idofuser = req.params.id;
    try {
        const posts = await Posts.find({ user: idofuser })
        res.status(200).json({ "success": true, posts });
    }
    catch (error) {
        res.status(404).json({ "success": false, "error": "Not Found" })
    }
}

const postcomment = async (req , res) => {
    const postid = req.params.id ; 
    const commentby = req.user._id ; 

    const post = await Posts.findById(postid) ; 

    if(!post) {
        return res.status(404).json({"error" : "Post Not Found !"}) ; 
    }

    const comment = req.body.comment ; 
    // console.log(comment);
    post.comments.push({commentbyid : commentby  , comment : comment }) ; 

    await post.save() ; 

    return res.status(200).json({"success" : true}) ; 

}


const likepost = async (req, res) => {
    const postId = req.params.id
    const userId = req.user._id
    const post = await Posts.findById(postId)

    if (!post) {
        res.send(`No post with id : ${postId}`);
    }
    if (post.likes.includes(userId)) {
        return res.status(404).json({
            msg: "You already Liked this post"
        })
    }

    post.likes.push(userId)
    await post.save()

    res.status(200).json({
        msg: "Post Liked",
    })
}
const dislikepost = async (req, res) => {
    const postId = req.params.id
    const userId = req.user._id.toString()
    const post = await Posts.findById(postId)

    if (!post) {
        res.send(`No post with id : ${postId}`);
    }
    if (!post.likes.includes(userId)) {
        return res.status(404).json({
            msg: "You haven't liked the post"
        })
    }

    post.likes = post.likes.filter(like =>like != userId)
    await post.save()

    res.status(200).json({
        msg: "Post Disliked",
    })
}

module.exports = { getallposts, addpost, deletepost, getuserpost , postcomment   , dislikepost  , likepost }; 