const mongoose = require("mongoose");
const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the title of your blog"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please enter the description of the blog"],
    },
    content: {
      type: String,
      required: [true, "Pleasewrite your content here"],
    },
  
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
