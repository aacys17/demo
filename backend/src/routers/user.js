// const express = require('express')
// const User = require('../models/user')
// const auth = require('../middleware/auth')
// const router = new express.Router()

// router.post('/users', async (req, res) => {
//     const user = new User(req.body)

//     try {
//         await user.save()
//         const token = await user.generateAuthToken()
//         res.status(201).send({user, token})
//     } catch (e) {
//         res.status(200).send({error:e.message, status: "Failed"})
//     }
// })

// router.post('/users/login', async(req, res) => {
//   // console.log(req.body.email)
//       // console.log(req.body.password)
//      // const {email,password} = req.body;
//   try {
//       const user = await User.findByCredentials(req.body.email, req.body.password)
//       const token = await user.generateAuthToken()
//       res.send({user, token})
//   } catch (e) {
//       res.status(400).send()
//   }
// })

// router.post('/users/logout', auth, async (req, res) => {
//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token !== req.token
//         })
//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// // to logout of all sessions
// router.post('/users/logoutAll', auth, async (req, res) => {
//     try {
//       req.user.tokens = []
//       await req.user.save()
//       res.send()
//     } catch (e) {
//       res.status(500).send()
//     }
// })


// router.get('/users/me', auth, async (req, res) => {
//    res.send(req.user)
// })

// router.get('/users/:id', async (req, res) => {
//     const _id = req.params.id

//     try {

//         const user = await User.findById(_id)

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.patch('/users/me', auth, async (req, res) => {
//   const updates = Object.keys(req.body)
//   const allowedUpdates = ['name', 'email', 'password']
//   const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
//   if(!isValidOperation) {
//     return res.status(400).send({ error: 'Invalid Updates!' })
//   }

//   try {
//     updates.forEach((update) =>  req.user[update] = req.body[update])
//     await req.user.save()
//    // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
//     res.send(req.user)
//   }catch (e) {
//     res.status(400).send(e)
//   }
// }) 

// router.delete('/users/me', auth, async (req, res) => {
//   try {
//     // const user = await User.findByIdAndDelete(req.user._id)

//     // if(!user) {
//     //   return res.status(404).send()
//     // }

//     await req.user.remove()
//     res.send(req.user)
//   } catch (e) {
//     res.status(500).send()
//   }
// })
// module.exports = router


const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const { validData } = require('../validation/validator')

const {
  createUser,
  deleteUser,
  updateUser,
  loginUser,
  readProfile,
  readUser,
  logoutUser,
} = require('../controllers/User');
router.post('/users', createUser);
router.post('/users/login', loginUser);
// router.post('/refreshtoken');

router.get('/users', readUser);
router.get('/users/me', auth, readProfile);
router.get('/users/logout', auth, logoutUser);

router.delete('/users/me', deleteUser);
router.patch('/users/me', updateUser);

module.exports = router;
