const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const Auth = require('../models/Auth');
const { generateAuthToken } = require('../utils/generateToken');
const { refreshToken } = require('../utils/generateToken');




const createUser = async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (e) {
        res.status(200).send({error:e.message, status: "Failed"})
    }
}

const loginUser = async(req, res) => {
  // console.log(req.body.email)
      // console.log(req.body.password)
     // const {email,password} = req.body;
  try {
      const user = await User.findByCredentials(req.body.email, req.body.password)
      console.log('logged in', user);
      const token = await user.generateAuthToken()
       res.send({ user, token }); 
  }
      
  catch (e) {
      res.status(400).send()
  }
}

    //   const refToken = await user.refreshToken()
      
    //  await new Auth({
    //     refreshToken: refToken,
    //   }).save();

    //   res.setHeader('authorization', token);
    //   res.setHeader('refreshtoken', refToken);

    //   res.send({
    //     message: 'User data',
    //     status: 'success',
    //     user,
    //   });
    // }

   

const logoutUser = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
}

// to logout of all sessions
// router.post('/users/logoutAll', auth, async (req, res) => {
//     try {
//       req.user.tokens = []
//       await req.user.save()
//       res.send()
//     } catch (e) {
//       res.status(500).send()
//     }
// })


const readProfile = async (req, res) => {
   res.send(req.user)
}

const readUser = async (req, res) => {
    const _id = req.params.id

    try {

        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
}

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
  if(!isValidOperation) {
    return res.status(400).send({ error: 'Invalid Updates!' })
  }

  try {
    updates.forEach((update) =>  req.user[update] = req.body[update])
    await req.user.save()
   // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    res.send(req.user)
  }catch (e) {
    res.status(400).send(e)
  }
}

const deleteUser = async (req, res) => {
  try {
    // const user = await User.findByIdAndDelete(req.user._id)

    // if(!user) {
    //   return res.status(404).send()
    // }

    await req.user.remove()
    res.send(req.user)
  } catch (e) {
    res.status(500).send()
  }
}

// const verifyRefreshTokens = async (req, res) => {
//   try {
//     const refreshToken = req.header('refreshtoken');
//     if (!refreshToken) {
//       res.status(401).send(error.message('Token not found'));
//     }
//     if (!refreshToken.includes(refreshToken)) {
//       res.status(403).send(error.message('Invalid refresh token'));
//     }
//     const user = await JWT.verify(
//       refreshToken,
//       process.env.REFRESH_TOKEN_SECRET
//     );
//     const { email } = user;
//   } catch (error) {
//     res.send(error.message);
//   }
// };


module.exports = {
    createUser,
    loginUser,
    logoutUser,
    readProfile,
    readUser,
    updateUser,
    deleteUser,
    // verifyRefreshTokens,
}
