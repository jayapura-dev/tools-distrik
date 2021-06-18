const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

dotenv.config({ path: './config.env' });
const connectDB = mongoose.connect(process.env.DATABASE);

module.exports = function(){

}

