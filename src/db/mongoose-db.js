const mongoose = require('mongoose')

const connectionUrl = process.env.DB_CONNECTION_URL
const databaseName = process.env.DATABASE_NAME

console.log("Database Connection Initialting...");
mongoose.connect(connectionUrl + '/' + databaseName, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Database Connection Successful!!!")
}).catch((err)=>{
    console.log("Database Connection Failed!!!", err)
})