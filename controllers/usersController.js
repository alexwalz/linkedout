const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.user
            .find({})
            .then(function (dbModel) {
                res.json(dbModel);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    findById: function (req, res) {
        db.user
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.user
            .create(req.body)
            .then(function (dbModel) {
                req.session.userId = dbModel._id;
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.user
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.user
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    login: function (req, res) {
        if (req.body.email && req.body.password) {
            db.user.authenticate(req.body.email, req.body.password, function (error, user) {
                if (error || !user) {
                    return res.json({
                        status: 401,
                        userId: 0
                    });
                } else {
                    req.session.userId = user._id;
                    return res.json({
                        status: 200,
                        userId: user._id
                    });
                }
            });
        } else {
            return res.json({
                status: 400,
                userId: 0
            });
        }
    },
    ActiveLogin: function (req, res) {
        if (req.session && req.session.userId) {
            var thisUser;
            db.user.findOne({_id: req.session.userId})
                .populate('posts')
                .then(function (data) {
                    data.password = "";
                    res.json({
                        loggedIn: true,
                        userId: req.session.userId,
                        userData: data
                    });
                })

        } else {
            res.json({
                loggedIn: false
            })
        }
    },
    logout: function (req, res) {
        if (req.session) {
            // delete session object
            req.session.destroy(function (err) {
                return res.json({
                    status: 200
                })
            });
        }
        else {
            return res.json({
                status: 501
            })
        }
    },
    addEducation: function (req, res) {
        db.Education
            .create(req.body)
            .then(function (dbEducation) {
                return db.user.findOneAndUpdate({_id: req.session.userId}, {$push: {education: dbEducation._id}}, {new: true});
            })
            .then(function (dbUser) {
                dbUser.password = "";
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    addPost: function(req, res) {
      db.Post
            .create(req.body)
            .then(function (dbPost) {
                console.log(dbPost);
                console.log(req.session.userId);
                return db.user.findOneAndUpdate({_id: req.session.userId}, {$push: {posts: dbPost._id}}, {new: true});
            })
            .then(function (dbUser) {
                dbUser.password = "";
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    updateLanguages: function(req, res) {
        var language = req.body.language;
        db.user
            .findByIdAndUpdate(req.params.id, { $push: {languages: language}}, {new: true})
            .then(function(dbModel) {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    replaceLanguages: function(req, res) {
        db.user
            .findOneAndUpdate({_id: req.params.id}, { $set: {languages: req.body}}, {new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateUser: function(req, res) {
        db.user
        .findOneAndUpdate({_id: req.params.id}, {$set: {current_company: req.body.current_company, 
            job_title: req.body.job_title, 
            phone: req.body.phone,
            birthday: req.body.birthday,
            location: req.body.location
        }}).then(function(dbModel){
            res.json(dbModel);
        }).catch(function(err){
            res.status(422).json(err)
        })
    }
};
