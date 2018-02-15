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
    first_name: "Alex",
    last_name: "Walz",
    email:"alexwalz@icloud.com",
    phone: "801-661-4344",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Mattis pellentesque id nibh tortor id aliquet lectus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Facilisis gravida neque convallis a cras semper. Diam vel quam elementum pulvinar etiam non. Fusce id velit ut tortor pretium. Neque egestas congue quisque egestas diam in. Eget est lorem ipsum dolor sit amet. In cursus turpis massa tincidunt dui. Nec nam aliquam sem et tortor. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Sem fringilla ut morbi tincidunt. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Ultricies mi quis hendrerit dolor magna eget est lorem.",
    business: "Gilla Goat",
    status: "Pending",
    role: "End User",
    date: new Date(Date.now())
  },  {
    first_name: "Ryan",
    last_name: "Walz",
    email:"rynwlz@gmail.com",
    phone: "801-377-3234",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Metus aliquam eleifend mi in nulla. Morbi enim nunc faucibus a pellentesque sit amet. Dictum varius duis at consectetur lorem.",
    business: "Gilla Goat",
    status: "Pending",
    role: "End User",
    date: new Date(Date.now())
  },  {
    first_name: "Lexie",
    last_name: "Walz",
    email:"lexiewalz@icloud.com",
    phone: "801-435-6372",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Purus semper eget duis at tellus. Est ante in nibh mauris cursus mattis molestie a iaculis. Luctus accumsan tortor posuere ac ut consequat. Felis eget velit aliquet sagittis id. Id nibh tortor id aliquet lectus proin. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Nibh sit amet commodo nulla facilisi. Arcu non sodales neque sodales ut etiam sit amet. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Non blandit massa enim nec. Mattis pellentesque id nibh tortor id aliquet lectus proin.",
    business: "Gilla Goat",
    status: "Pending",
    role: "End User",
    date: new Date(Date.now())
  },  {
    first_name: "Brian",
    last_name: "Bolnick",
    email:"brianbolnick@gmail.com",
    phone: "801-478-1205",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet. Tempor id eu nisl nunc mi ipsum faucibus vitae. Tortor at auctor urna nunc id. At imperdiet dui accumsan sit. Mi proin sed libero enim sed faucibus turpis in eu. Pharetra massa massa ultricies mi quis.",
    business: "Gilla Goat",
    status: "Pending",
    role: "End User",
    date: new Date(Date.now())
  },

  
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
