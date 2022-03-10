const mongoose = require('mongoose');
const config = require('./config')

module.exports = () => {
    mongoose.connect(config.mongo_url, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => {
        console.log('Database connected')
    })
    .catch(err => {
        console.log(err);
    })
}