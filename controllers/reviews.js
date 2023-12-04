const Activity = require("../models/activity.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
  let activity = await Activity.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  activity.reviews.push(newReview);
  await newReview.save();
  await activity.save();
  req.flash("success", "Review added!");
  res.redirect(`/activities/${activity._id}`);
  // console.log("Thanks for review/rating");
  // res.send("Thanks for review/rating");
};

module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;

  await Activity.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review deleted!");
  res.redirect(`/activities/${id}`);
};
