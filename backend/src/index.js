const express = require('express')
const connection = require('./db/mongoose')
const cors = require('cors')
const User = require('./models/user')
const dotenv = require('dotenv').config()

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
connection()
app.use(cors({
    // origin: 'http://localhost:3000',
    // credentials: true,
    // exposedHeaders: ['authorization', 'refreshtoken'],
})
)

const port = process.env.PORT || 5000

// app.use((req, res, next) => {
//    if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//    } else {
//        next()
//    }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.message);
});



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')

// const main = async () => {
//     // const task = await Task.findById('61c93d64233dab8aa47eb3cd')
//     // await task.populate('owner')
//     // console.log(task.owner)

//     const user = await User.findById('61c9532abcd78ee6e926a684')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }

// main ()

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () {
//     return {}
// }

// console.log(JSON.stringify(pet))

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'adbhv' }, 'thisisnew', { expiresIn: '2 days' })
//     console.log(token)
    
//     const data = jwt.verify(token, 'thisisnew')
//     console.log(data)
// }
// myFunction()
