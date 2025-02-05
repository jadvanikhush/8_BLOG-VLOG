const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');  // Assuming you have a Blog model


router.get('/', async (req, res) => {
    // Render the "home" EJS view, passing data to the template
    try {
        // Fetch all blogs from the database
        const blogs = await Blog.find();  
        res.render('Main_dashboard',{ blogs });
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
  });

//go for next admin_login routes

module.exports = router;
