const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog'); // Assuming you have a Blog model

// Route to handle blog details by slug
router.get('/blog/:slug', async (req, res) => {
  const slug = req.params.slug;
  

  try {
    // Find the blog by slug
    const blog = await Blog.findOne({ slug }).populate('category');
    if (!blog) {
      return res.status(404).send('Blog not found');
    }

    // Render blog details page (e.g., blogDetails.ejs)
    res.render('blogDetails', { blog });
  } catch (err) {
    console.error('Error retrieving blog:', err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
