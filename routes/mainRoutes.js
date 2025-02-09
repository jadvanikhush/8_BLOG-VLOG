const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');  // Assuming you have a Blog model
const Category = require('../models/Category')

//Search And ALL
router.get('/', async (req, res) => {
  // Render the "home" EJS view, passing data to the template
  // console.log("que😍", req.query);

  const searchCategory = req.query.category;


  if (searchCategory) {
    console.log("searchCategory🍾", searchCategory);
    try {
      let blogs;
      if (searchCategory) {
        const blogCategory = await Blog.find({ category: searchCategory });
        console.log('Category Found⚡:', blogCategory);

        if (blogCategory) {
          res.render('Main_dashboard', { blogs: blogCategory });

        } else {
          blogs = [];
          console.log('No matching category found.');
        }
      }
    } catch (err) {
      console.error('Error retrieving blogs:', err);
      res.status(500).send('Error retrieving blogs');
    }
  }
  else {
    try {
      // Fetch all blogs from the database
      const blogs = await Blog.find();
      res.render('Main_dashboard', { blogs });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }


});
//go for next admin_login routes


// Use blog routes
const blogRoutes = require('../routes/blogRoutes'); // Adjust the path as needed

router.use('/', blogRoutes);
module.exports = router;
