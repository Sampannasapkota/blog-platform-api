const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlogPut,
  updateBlogPatch,
  deleteBlog,
} = require("../controllers/blogController");

// Get all blogs
router.get("/", getBlogs);

// Get specific blog
router.get("/:id", getBlog);

// Create blog
router.post("/", protect, createBlog);

// Update blog - PUT
router.put("/:id", protect, updateBlogPut);

// Update blog - PATCH
router.patch("/:id", protect, updateBlogPatch);

// Delete blog
router.delete("/:id", protect, deleteBlog);

module.exports = router;
