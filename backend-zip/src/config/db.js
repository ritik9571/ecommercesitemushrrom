const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://ritiksingh4989:vtDilQGgu0zDRhFl@cluster0.h7zymea.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}