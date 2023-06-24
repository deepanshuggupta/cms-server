import mongoose, { Schema } from "mongoose";

const ContentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      unique: true,
      type: String,
      required: true,
    },
    mainImageUri: {
      type: String,
      required: true,
    },
    richText: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      required: true,
      default: false,
    },
    tags: {
      type: [String],
      required: true,
    },
    authorId: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export const Content = mongoose.model("Content", ContentSchema);
