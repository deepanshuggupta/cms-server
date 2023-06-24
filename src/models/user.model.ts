import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  authorId: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", UserSchema);
