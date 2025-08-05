const Course = require('../models/Course');
const { mutipleMongooseToObjects } = require('../../util/mongoose');

class SiteController {

    // [GET] /
    async home(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: mutipleMongooseToObjects(courses)
                });
            })
            .catch(next);

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;