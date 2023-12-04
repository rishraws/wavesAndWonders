const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Activity = require("../models/activity.js");
const { isLoggedIn, isOwner, validateActivity } = require("../middleware.js");

const activityController = require("../controllers/activities.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/").get(wrapAsync(activityController.index)).post(
  isLoggedIn,

  upload.single("activity[image]"),
  validateActivity,
  wrapAsync(activityController.createActivity)
);

//New route
router.get("/new", isLoggedIn, activityController.renderNewForm);

router
  .route("/:id")

  .get(wrapAsync(activityController.showActivity))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("activity[image]"),
    validateActivity,
    wrapAsync(activityController.updateActivity)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(activityController.destroyActivity));

//Edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(activityController.renderEditForm)
);

module.exports = router;

//Delete route

// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.destroyListing)
// );

// //Index route
// router.get("/", wrapAsync(listingController.index));

// //Show route

// router.get("/:id", wrapAsync(listingController.showListing));

// //Create route
// router.post(
//   "/",
//   isLoggedIn,
//   validateListing,
//   wrapAsync(listingController.createListing)
// );

// //Update route

// router.put(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   validateListing,
//   wrapAsync(listingController.updateListing)
// );
