var mongoose = require('mongoose');

mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Make sure MongoDB is running.');
});

var ScoreSchema = new mongoose.Schema({
  Score: Number;
  Correct: [],
  Wrong: [],
});


module.exports = mongoose.model('ScoreSchema', ScoreSchema);
