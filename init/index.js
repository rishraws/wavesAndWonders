const mongoose = require("mongoose");
const initData = require("./data.js");
const Activity = require("../models/activity.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wavesAndWonders";

main()
  .then(() => {
    console.log("connected to DB W&W");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}
const initDB = async () => {
  await Activity.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "656cdc18caa2952497a03c04",
  }));
  await Activity.insertMany(initData.data);
  console.log("data was initialized");
};
initDB();
