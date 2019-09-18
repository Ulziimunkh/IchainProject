var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
//mongoose.connect('mongodb://localhost/bpds', { useMongoClient: true, promiseLibrary: require('bluebird') })
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log("mongodb connected succesfully..."))
  .catch(err => console.error('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)));

require('./user.model');
