const express = require("express");
const { protect } = require("../middleware/auth.js");

const { getmyinfo , getallposts , getmyfollowers  , getmyfollowing , followUser , getallusers  , 
    updateuser  , unFollowUser} = require("../controllers/user");


const router = express.Router(); 

router.route("/getmyinfo").get(protect , getmyinfo);
router.route("/getallposts").get(protect , getallposts);
router.route("/getmyfollowers").get(protect , getmyfollowers);
router.route("/getmyfollowing").get(protect , getmyfollowing);
router.route("/followUser/:id").post(protect , followUser) ; 
router.route("/getallusers").post(protect , getallusers) ; 
router.route("/updateuser").post(protect , updateuser) ; 
router.route("/updateuser").put(protect , updateuser) ; 
router.route("/unFollowUser/:id").post(protect , unFollowUser) ; 


// router.route("/getuserpost/:id").get(getuserinfo);
// router.route("/addpost").post(protect,addpost);
// router.route("/deletepost/:id").delete(protect,deletepost);

module.exports = router;
