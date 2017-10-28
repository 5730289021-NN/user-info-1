'use strict';

module.exports = function(app) {
    var user = require('../controllers/userCtrl');

    // user Routes
    app.route('/api/user')
        .get(user.list_all_user);

    app.route('/api/user/:uname')
        .get(user.read_a_user);
};