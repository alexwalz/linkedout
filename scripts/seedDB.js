const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/linkedOut",
  {
    // useMongoClient: true
  }
);

const userSeed = [
  {
    firstName: "Alexander",
    lastName: "Walz",
    email: "alexwalz@icoud.com",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    phone: "801-661-4344",
    image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAQDGAAwAAQAAAAAAAA7hAAAAJDE2YzA2NDBkLWU0YzMtNDE2Zi1hMDcxLTY0YWFiNWZlZjM5ZQ.jpg",
    job_title: "Full Stack Developer",
    birthday: "10/29/1990",
    current_company: "Instructure",
    education: "Some College",
    location: "Utah",
    languages: [
        "React.js",
        "Node.js",
        "MongoDb",
        "Sequelize",
        "MySql",
        "Javascript",
        "Jquery",
        "Bootstrap"
    ],
    connections:[
        "<Mongo User Id>",
        "<Mongo User Id>",
        "<Mongo User Id>",
        "<Mongo User Id>",
        "<Mongo User Id>",
        "<Mongo User Id>",
        "<Mongo User Id>",
    ]
  }

  
];


db.user
  .remove({})
  .then(() => db.user.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
