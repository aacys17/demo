//CRUD create read update delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
 const {MongoClient, ObjectId} = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

 const db = client.db(databaseName)

//  db.collection('users').deleteMany({
//      age:30
//  }).then((result)=> {
//     console.log(result)
//  }).catch((error)=>{
//     console.log(error)
//  })

//  db.collection('users').updateOne({
//      _id: new ObjectId("61b858db439ce444dd56246b")
//  }, {
//      $inc: {
//          age:1
//      }
//  }).then((result) => {
//      console.log(result)
//  }).catch((error) => {
//      console.log(error)
//  })

// db.collection('users').updateMany({
//     age: 22
// }, {
//     $set: {
//         age: 30
//     }
// }).then((result) => {
//     console.log(result.modifiedCount)
// }).catch((error) => {
//     console.log(error)
// })
// })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Asta',
    //         age: 22
    //     }, {
    //         name: 'Yuno',
    //         age: 22
    //     }, {
    //         name: 'Lily',
    //         age:23
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log("Unable to insert documents!")
    //     }
    // })


   

    // db.collection('users').findOne({_id: new ObjectId("61b6e947cee5d731d6032e6f")},(error, user)=> {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age: 22}).toArray((error, users) => {
    //     console.log(users)
    // })

    //  db.collection('users').find({age: 22}).count((error, count) => {
    //     console.log(count)
    // })



})