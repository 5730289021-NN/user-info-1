'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('userProfile');



exports.list_all_user = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
        //console.log(user,'user')
    });
};


// exports.create_a_task = function(req, res) {
//   var new_task = new Task(req.body);
//   new_task.save(function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

exports.read_a_user = function (req, res) {
    User.find({
        uname: req.params.uname
    }, function (err, user) {
        if (err) res.send(err);
        var outputJson={
            //uname:user[0].uname,
            profile_image:user[0].profile_image
        }
        res.json(outputJson);
    });
};

// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate({_id:req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
// Task.remove({}).exec(function(){});
// exports.delete_a_task = function(req, res) {

//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };
