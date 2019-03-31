const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOB_URI, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false
});