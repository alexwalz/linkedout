const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(routes);
mongoose.Promise = global.Promise;
app.use(session({
  secret: 'dont die',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
      mongooseConnection: mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/linkedOut")
    }),
    httpOnly: true,
    secure: false,
    maxAge: null,
    path: "/"
}));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/linkedOut",
  {useMongoClient: true}
);

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});