import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    img: { type: String, require: true },
  },
  { toJSON: { virtuals: true } }
);

postSchema.virtual("short_description").get(function () {
  return this.description.substring(0, 150) + "...";
});

const PostModel = models.Post || model("Post", postSchema);

export default PostModel;
