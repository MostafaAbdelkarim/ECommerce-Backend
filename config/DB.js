const mongoose = require('mongoose');
const config = require('config');

mongoose.set('strictQuery', true);

module.exports = mongoose.connect(config.get('RemoteDB'))
    .then(() => console.log('Connected to DB Seccessfully 💾'))
        .catch(err => {
            console.error(`Cannot connect to DB💥, Error: ${err}`);
            process.exit(1);
        });
