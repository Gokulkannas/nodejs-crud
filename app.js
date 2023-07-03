const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "./html");

mongoose
  .connect("mongodb+srv://gokulkannas20msc:vscode1234@cluster0.z9hspc4.mongodb.net/casting")
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const castSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  film: {
    type: String,
    requied: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  credited: {
    type: Boolean,
    default: false,
  },
});

const creditSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  film: {
    type: String,
    requiored: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Cast = mongoose.model("Cast", castSchema);
const Credit = mongoose.model("Credit", creditSchema);

const getaddDetails = (req, res) => {
  return res.render("add-details");
};

const postDetails = (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    experience: req.body.experience,
    film: req.body.film,
    credited: Boolean(req.body.credited),
  };
  Cast.create(data)
    .then((data) => {
      return res.redirect("/details");
    })
    .catch((err) => {
      console.log(err);
    });
};

const details = (req, res) => {
  Cast.find({})
    .then((data) => {
      return res.render("details", { data });
    })
    .catch((err) => {
      console.log(err);
    });
};

const creditedDetails = (req, res) => {
  Cast.find({})
    .then((data) => {
      return res.render("credited", { data });
    })
    .catch((err) => {
      console.log(err);
    });
};

const credited = (req, res) => {
    const id = req.params.id;
    Cast.updateOne({_id:id},{$set:{credited:true}})
        .then(()=>{
            return res.redirect("/credited")
        })
        .catch((err)=>{
            console.log(err);
        })
};

app.get("/", getaddDetails);
app.post("/", postDetails);
app.get("/details", details);

app.get("/credited", creditedDetails);

app.get("/credited/:id", credited);

const port = 1000;

app.listen(port, () => {
  console.log("port on 1000");
});
