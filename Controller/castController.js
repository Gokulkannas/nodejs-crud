const Cast = require("../Model/Cast");

exports.getaddDetails = (req, res) => {
  return res.render("add-details");
};

exports.postDetails = (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    accountnumber: req.body.accountnumber,
    IFSC: req.body.ifsc,
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

exports.details = (req, res) => {
  Cast.find({})
    .then((data) => {
      return res.render("details", { data });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.creditedDetails = (req, res) => {
  Cast.find({})
    .then((data) => {
      return res.render("credited", { data });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.credited = (req, res) => {
  const id = req.params.id;
  Cast.updateOne({ _id: id }, { $set: { credited: true } })
    .then(() => {
      return res.redirect("/credited");
    })
    .catch((err) => {
      console.log(err);
    });
};
