const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connection = async()=> {
    // console.log(process.env)
    try {
        await mongoose.connect('mongodb+srv://aashish:aashish1234@aasis.ujmwt.mongodb.net/Wardrobe?retryWrites=true&w=majority')
        console.log("connected to database")
    }

    catch (error) {
        console.log(error)
    }
}

module.exports = connection

