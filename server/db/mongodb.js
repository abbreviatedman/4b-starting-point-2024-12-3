const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connectToMongoDb() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected!');
    } catch (error) {
        console.log(`DB Connection failed: ${error}`)
    }
}

module.exports = connectToMongoDb;