const User = require("../models/User")
const Posts = require("../models/Posts")

//localhost:3000/api/v1/users/
// const getSearcedUser = async (req, res) => {
//     const user = await User.findOne({ _id: req.params.id })
//     if (!user) {
//         throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`);
//     }
//     const questions = await Question.find({ user: req.params.id })
//     const answers = await Answer.find({ user: req.params.id })
//     const { password, email, ...rest } = user._doc
//     return res.status(StatusCodes.OK).json({ rest, questionCount: questions.length, answerCount: answers.length });
// }

// Get the User Information 
const getmyinfo = async (req, res) => {
    const user = await User.findOne({ _id  :  req.user._id }).select('-password');

    if (!user) {
        res.status(404).json({"error" : "Not Found !"});
    }
    // const posts = await Posts.find({ user: req.user._id })
    // const answers = await Answer.find({ user: req.user.userId })
    // console.log(req.user);
    // return res.status(StatusCodes.OK).json({ user, questionCount: questions.length, answerCount: answers.length });
    return res.status(200).json({"success" : true , user }) ; 
};


// Get all posts by the loggedIn User 
const getallposts = async (req, res) => {
    // console.log(req.user);
    const posts = await Posts.find({ user : req.user._id })
    if (!posts) {
        res.status(404).json({"error" : "Not Found !"});
    }
    return res.status(200).json({"success" : true , posts });
}


const followUser = async (req, res) => {
    const userId = req.user._id
    const id = req.params.id

    const followeruser = await User.findById(userId)
    const followinguser = await User.findById(id)
    if (!followinguser) {
        return res.status(404).send(`No User with id: ${id}`)
        // return next(new ErrorResponse(`No User with id: ${id}`, 404));
    }
    if (followeruser.following.includes(id)) {
        return res.status(400).json('You are already following this user.')
        // return next(new ErrorResponse(`You already follow ${followinguser.username}`, 400));
    }
    followeruser.following.push(id)
    followinguser.followers.push(userId)
    // await User.findById(userId).populate('following','-password')
    // await User.findById(id).populate('followers','-password')
    
    await followeruser.save()
    await followinguser.save()

    res.status(200).json(`You are now following ${followinguser.username}`)
}


const getallusers = async (req, res) => {
    const users = await User.find()
    if (!users) {
        // return next(new ErrorResponse("User Not Found", 404));
        return res.status(404).send("User Not Found");
    }

    return res.status(200).json({ users });
}

const updateuser = async (req, res) => {

    const user = await User
        .findOne
        ({ email: req.user.email })
        .select('-password');
    if (!user) {
        return next(new ErrorResponse(`No User with id: ${req.params.id}`, 404));
    }
    const { name, about, username, profilePic } = req.body;
    if (name) {
        user.name = name;
    }
    if (about) {
        user.about = about;
    }
    if (username) {
        user.username = username;
    }
    if (profilePic) {
        user.profilePic = profilePic;
    }
    await user.save();

    return res.status(200).json({ user });

}

// const updateUserPassword = async (req, res) => {
//     const user = await User
//         .findOne
//         ({ username: req.user.username })
//     if (!user) {
//         throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`);
//     }
//     const { oldPassword, newPassword } = req.body;
//     if (oldPassword && newPassword) {
//         if (oldPassword === newPassword) {
//             throw new CustomError.BadRequestError('Old password and new password cannot be same');
//         }
//         const isPasswordValid = await user.comparePassword(oldPassword);
//         if (!isPasswordValid) {
//             throw new CustomError.BadRequestError('Old password is not correct');
//         }
//         user.password = newPassword;
//         await user.save();
//         return res.status(StatusCodes.OK).json({ message: 'Password updated successfully' });
//     }
//     throw new CustomError.BadRequestError('Please provide old password and new password');
// }



// Get all followers of a loggedIn User 
const getmyfollowers = async (req, res) => {
    // const { id } = req.params
    const userid = req.user._id ; 
    const user = await User.findById(userid)
    if (!user) {
        res.status(404).json({"error" : "Not Found"})
    }
    // const followers = await Promise.all(
    //     user.followers.map(async followerId => {
    //         const follower = await User.findById(followerId)
    //         const { password, email, ...rest } = following._doc
    //         return rest
    //     }))

    const followers = user.followers  ; 
    const a = await User.findById(userid).populate('followers' , '-password')
    res.status(200).json({"success" : true , a}) ; 
}

const getmyfollowing = async (req, res) => {
    const userid = req.user._id ; 
    const user = await User.findById(userid)
    if (!user) {
        res.status(404).json({"error" : "Not Found"})
    }

    const arr = [] ; 

    const following = user.following  ; 
    // console.log(following);  //giving me array of elements 


    //1.
    // for (let index = 0; index < following.length; index++) {
    //     let id = following[index] ; 
    //     const userdetails = await User.findById(id) ; 
    //     arr.push(userdetails) ; 
    // }

    //2. Both working in the same way 
    const a = await User.findById(userid).populate('following' , '-password')
    res.status(200).json({"success" : true , a}) ; 
}


const unFollowUser = async (req, res) => {

    const userId = req.user._id.toString()
    const id = req.params.id

    const followeruser = await User.findById(userId)
    const followinguser = await User.findById(id)

    if (!followeruser || !followinguser) {
        return res.status(404).send(`No User with id: ${id}`)
    }
    if (!followeruser.following.includes(id)) {
        return res.status(400).json(`You do not follow user ${followinguser.username}.`)
    }

    followeruser.following = followeruser.following.filter(following => following != id)
    followinguser.followers = followinguser.followers.filter(follower => follower != userId)

    await followeruser.save()
    await followinguser.save()
    
    res.status(200).json(`You are no longer following ${followinguser.username}`)
}


module.exports = {
    getmyinfo , getallposts  , 
    getmyfollowers , 
    getmyfollowing , 
    followUser ,
    getallusers  , 
    updateuser  ,
    unFollowUser 

}
