// var express = require('express');
// var router = express.Router();
// var score = require('../models/score.js');

// // get all jobs
// router.get('/scores', function(req, res, next) {
//   score.find(function(err, data){
//     if(err){
//       res.json({'message': err});
//     } else {
//       res.json(data);
//     }
//   });
// });


// // get a score
// router.get('/score/:id', function(req, res, next) {
//   score.findById(req.params.id, function(err, data){
//     if(err){
//       res.json({'message': err});
//     } else {
//       res.json(data);
//     }
//   });
// });

// // post a score
// router.post('/score', function(req, res, next) {
//   score = new score({
//     score: req.body.score,
//     correct: req.body.correct,
//     wrong: req.body.wrong
//   });
//   score.save(function(err, data){
//     if(err){
//       res.json({'message': err});
//     } else {
//       res.json(data);
//     }
//   });
// });

// // put a score
// router.put('/score/:id', function(req, res, next) {
//   var update = {
//     score: req.body.score,
//     correct: req.body.correct,
//     wrong: req.body.wrong
//   };
//   score.findByIdAndUpdate(req.params.id, update, function(err, data){
//     if(err){
//       res.json({'message': err});
//     } else {
//       res.json(data);
//     }
//   });
// });

// // delete a score
// router.delete('/score/:id', function(req, res, next) {
//   score.findByIdAndRemove(req.params.id, function(err, data){
//     if(err){
//       res.json({'message': err});
//     } else {
//       res.json(data);
//     }
//   });
// });

// module.exports = router;
