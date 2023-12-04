const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const activitySchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  ageCriteria: Number,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  time: Number,

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

activitySchema.post("findOneAndDelete", async (activity) => {
  if (activity) {
    await Review.deleteMany({ _id: { $in: activity.reviews } });
  }
});

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;

// //activity.js

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const activitySchema =  new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: String,
//     ageCriteria: Number,
//     image: {
//         type: String,
//         default: "https://media.istockphoto.com/id/1445286946/photo/yoga-class.jpg?s=612x612&w=0&k=20&c=P7qRBbPakuCRWU472fyAqYMSS4vfFhkxirJxSlUk3Wg=",
//         set: (v) => v==="" ? "https://media.istockphoto.com/id/1445286946/photo/yoga-class.jpg?s=612x612&w=0&k=20&c=P7qRBbPakuCRWU472fyAqYMSS4vfFhkxirJxSlUk3Wg=": v,
//     },
//     price: Number,
//     location: String,
//     time: Number,
// });
