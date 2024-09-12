const mongoose = require("mongoose")
require("dotenv").config();

const connectDb=()=>{
    return mongoose.connect(process.env.mongoDbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        tls: true, // Enable TLS/SSL
        tlsAllowInvalidCertificates: true,  
    })
}

module.exports={connectDb}