const Activity = require("../models/activity.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const allActivities = await Activity.find({});
  res.render("./activities/index.ejs", { allActivities });
};

module.exports.renderNewForm = (req, res) => {
  res.render("./activities/new.ejs");
};

module.exports.showActivity = async (req, res) => {
  let { id } = req.params;
  const activity = await Activity.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!activity) {
    req.flash("error", "Hang on... No such activity exits!");
    res.redirect("/activities");
  } else {
    res.render("./activities/show.ejs", { activity });
  }
};

module.exports.createActivity = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.activity.location,
      limit: 1,
    })
    .send();

  // console.log(response.body.features[0].geometry);
  // res.send("done");

  let url = req.file.path;

  let filename = req.file.filename;

  const newActivity = new Activity(req.body.activity);

  newActivity.owner = req.user._id;

  newActivity.image = { url, filename };

  newActivity.geometry = response.body.features[0].geometry;

  let savedActivity = await newActivity.save();

  req.flash("success", "New Activity Added!");
  res.redirect("/activities");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const activity = await Activity.findById(id);
  //console.log(Activity);
  if (!activity) {
    req.flash("error", "Hang on... Activity doesn't exist anymore!");
    res.redirect("/activities");
  }
  let originalImageUrl = activity.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_150,w_250");

  res.render("activities/edit.ejs", { activity, originalImageUrl });
};

module.exports.updateActivity = async (req, res) => {
  let { id } = req.params;

  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.activity.location,
      limit: 1,
    })
    .send();

  let geoCord = response.body.features[0].geometry;

  let geoActivity = await Activity.findByIdAndUpdate(id, geoCord);

  geoActivity.geometry = geoCord;
  let savedActivity = await geoActivity.save();

  let activity = await Activity.findByIdAndUpdate(id, { ...req.body.activity });

  if (typeof req.file !== "undefined") {
    console.log(geoCord);
    let url = req.file.path;
    let filename = req.file.filename;
    activity.image = { url, filename };

    await activity.save();
  }
  req.flash("success", "Activity updated!");
  res.redirect(`/activities/${id}`);
};

module.exports.destroyActivity = async (req, res) => {
  let { id } = req.params;

  let deletedActivity = await Activity.findByIdAndDelete(id);
  console.log(deletedActivity);
  req.flash("success", "Activity deleted!");
  res.redirect("/activities");
};
