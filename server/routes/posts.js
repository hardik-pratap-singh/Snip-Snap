const express = require("express");
const { protect } = require("../middleware/auth.js");

const { getallposts , addpost  , deletepost  , getuserpost  , postcomment  , likepost , dislikepost } = require("../controllers/posts.js");


const router = express.Router();

router.route("/getallposts").get(protect,getallposts);
router.route("/addpost").post(protect,addpost);
router.route("/deletepost/:id").delete(protect,deletepost);
router.route("/getuserpost/:id").get(getuserpost);

router.route("/postcomment/:id").post(protect , postcomment) ;  //id here is the ID of the post 
router.route("/likepost/:id").post(protect , likepost);
router.route("/dislikepost/:id").post(protect , dislikepost ) ; 


module.exports = router;
