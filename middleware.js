const Activity = require("./models/activity");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");

const { activitySchema, reviewSchema } = require("./schema.js");
const { openDelimiter } = require("ejs");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;

    req.flash("error", "User should be logged-in! ");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let activity = await Activity.findById(id);
  if (!activity.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "permission unulled as verification failed!");
    return res.redirect(`/activities/${id}`);
  }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "permission unulled as verification failed!");
    return res.redirect(`/activities/${id}`);
  }
  next();
};

module.exports.validateActivity = (req, res, next) => {
  let { error } = activitySchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, error);
  } else {
    next();
  }
};
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, error);
  } else {
    next();
  }
};
