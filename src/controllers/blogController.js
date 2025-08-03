const Blog = require("../models/blogModel");

// Get all blogs with filtering, sorting and pagination
const getBlogs = async (req, res) => {
  try {
    const { search, tag, sort, page = 1, limit = 10 } = req.query;
    const query = {};
    if (search) query.title = { $regex: search, $options: "i" };
    if (tag) query.tags = tag;

    const sortOptions = {};
    if (sort) sortOptions.createdAt = sort === "desc" ? -1 : 1;

    const skip = (page - 1) * limit;

    const blogs = await Blog.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit);

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get specific blog
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create blog
const createBlog = async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      tags: req.body.tags,
      user: req.user.id,
    });
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update blog - PUT
const updateBlogPut = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        tags: req.body.tags,
      },
      { new: true, runValidators: true }
    );

    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update blog - PATCH
const updateBlogPatch = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const updates = {};
    if (req.body.title) updates.title = req.body.title;
    if (req.body.description) updates.description = req.body.description;
    if (req.body.content) updates.content = req.body.content;
    if (req.body.tags) updates.tags = req.body.tags;

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete blog
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await blog.deleteOne({ _id: req.params.id });
    res.json({ message: "Blog removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlogPut,
  updateBlogPatch,
  deleteBlog,
};