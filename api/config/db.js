import mongoose, { mongo } from "mongoose";

export default () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
