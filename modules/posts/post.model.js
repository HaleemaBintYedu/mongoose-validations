const { model, Schema } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
    },
    body: {
      type: String,
      required: true,
      minLength: 3,
    },
    published: {
      type: Boolean,
      default: false,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    likedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      } 
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = model("Post", postSchema);
