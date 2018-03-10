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
            .populate({
                path: 'posts',
                populate: {
                    path: 'comments',
                    model: 'comment',
                    populate: {
                        path: 'user',
                        model: 'User'
                    }
                }
            })
            .populate('education')
            .populate('connections')
            .then(function (dbUser) {
                dbUser.password = "";
                res.json(dbUser);
            })
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
                .populate('education')
                .populate('connections')
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
    addPost: function (req, res) {
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
    updateLanguages: function (req, res) {
        var language = req.body.language;
        db.user
            .findByIdAndUpdate(req.params.id, {$push: {languages: language}}, {new: true})
            .then(function (dbModel) {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    replaceLanguages: function (req, res) {
        db.user
            .findOneAndUpdate({_id: req.params.id}, {$set: {languages: req.body}}, {new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateUser: function (req, res) {
        db.user
            .findOneAndUpdate({_id: req.params.id}, {
                $set: {
                    current_company: req.body.current_company,
                    job_title: req.body.job_title,
                    phone: req.body.phone,
                    birthday: req.body.birthday,
                    location: req.body.location,
                    about: req.body.about
                }
            }).then(function (dbModel) {
            res.json(dbModel);
        }).catch(function (err) {
            res.status(422).json(err)
        })
    },
    findRecentPosts: function (req, res) {
        db.Post.find({}).sort({viewCount: -1}).limit(50)
            .populate({
                path: 'comments',
                model: 'comment',
                populate: {
                    path: 'user',
                    model: 'User'
                }
            })
            .then(function (dbPost) {
                var postIdArray = [];

                for (j = 0; j < dbPost.length; j++) {
                    postIdArray.push(dbPost[j]._id);
                }

                db.user.find({posts: {$in: postIdArray}})
                    .then(function (dbUsers) {
                        var newObj = [];


                        for (i = 0; i < dbPost.length; i++) {
                            for (u = 0; u < dbUsers.length; u++) {
                                for (o = 0; o < dbUsers[u].posts.length; o++) {
                                    if (dbPost[i]._id.toString() == dbUsers[u].posts[o].toString()) {
                                        newObj.push({
                                            userId: dbUsers[u]._id,
                                            postId: dbPost[i]._id,
                                            firstName: dbUsers[u].firstName,
                                            lastName: dbUsers[u].lastName,
                                            image_url: dbUsers[u].image_url,
                                            message: dbPost[i].message,
                                            messageType: dbPost[i].messageType,
                                            comments: dbPost[i].comments,
                                            date: dbPost[i].date
                                        })
                                    }
                                }
                            }
                        }

                        res.json({data: newObj});
                    }).catch(function (err) {
                    console.log(err);
                })
            }).catch(function (err) {
            console.log(err);
        })
    },

    newProject: function (req, res) {
        var project = req.body;
        db.user
            .findByIdAndUpdate(req.params.id, {$push: {projects: project}}, {new: true})
            .then(function (dbModel) {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },

    addConnection: function (req, res) {
        db.user.findByIdAndUpdate(req.session.userId, {$push: {connections: req.params.id}}, {new: true})
            .then(function (dbModel) {
                db.user.findById(dbModel._id)
                    .populate("connections")
                    .then(function (dbUser) {
                        res.json(dbUser);
                    }).catch(err => res.status(422).json(err));

            })
            .catch(err => res.status(422).json(err));
    },
    addComment: function (req, res) {
        db.user
            .findById(req.session.userId)
            .then(function (dbUser) {
                //console.log("...Found user...");
                //console.log(dbUser);
                dbUser.password = "";
                let comment = {
                    text: req.body.text,
                    user: dbUser
                };
                db.comment
                    .create(comment)
                    .then(function (dbComment) {
                        //console.log("... dbComment made...");
                        //console.log(dbComment);
                        //console.log("user id..." + req.session.userId);
                        //console.log("post id..." + req.params.postid);
                        db.Post.findOneAndUpdate({_id: req.params.postid}, {$push: {comments: dbComment._id}}, {new: true})
                            .then(function (dbPost) {
                                let commentObj = {
                                    id: dbComment._id,
                                    text: dbComment.text,
                                    date: dbComment.date,
                                    user: dbUser
                                };
                                //console.log(".... responding with...");
                                //console.log(commentObj);
                                res.json({data: commentObj});
                            });
                    })
                    .then(function (dbPost) {
                    })
                    .catch(function (err) {
                        res.json(err);
                    });
            })
            .catch(err => res.status(422).json(err));
    },
};
