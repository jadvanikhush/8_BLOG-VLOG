const express = require('express');
const router = express.Router();

const Category = require('../models/Category');
const Blog = require('../models/Blog');  // Assuming you have a Blog model

const { protectAdmin } = require('../middleware/authMiddleware');
const {createCategory} = require('../controllers/categoryController');
const { createBlog } = require( '../controllers/blogController')
// const { logoutAdmin } = require('../controllers/authController')

//allCategories
// router.post('/allCategories', allCategories);

router.get('/allCategories', async (req, res) => {
    try {
      // Fetch all categories from the database
      const categories = await Category.find();  
      res.render('allcategories', { categories: categories });  // Render allcategories.ejs with categories
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });

  // Route to delete a category (POST method instead of GET)
router.post('/delete-category/:id', async (req, res) => {
    const categoryId = req.params.id;
  
    try {
      // Find the category by ID and delete it
      await Category.findByIdAndDelete(categoryId);
      
      // Redirect to the categories list after deletion
      res.redirect('/all-categories');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting category');
    }
  });
  


// -----------------------------------------------------------------------------------
//addCategories

// Route to render the Add Category page (GET request)
router.get('/addcategory', (req, res) => {
    res.render('addcategory');  // Render the addcategory.ejs page
  });  
// Route to handle form submission (POST request)
router.post('/addCategories', createCategory);


// -----------------------------------------------------------------------------------
//allBlogs
// Route to display all blogs
router.get('/allBlogs', async (req, res) => {
  try {
    // Fetch all blogs from the database
    const blogs = await Blog.find();  
    res.render('allBlogs', { blogs: blogs });  // Render allBlogs.ejs with blogs data
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Route to delete a blog
router.post('/delete-blog/:id', async (req, res) => {
  const blogId = req.params.id;

  try {
    // Find the blog by ID and delete it
    await Blog.findByIdAndDelete(blogId);
    
    // Redirect to the blogs list after deletion
    res.redirect('/allblogs');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting blog');
  }
});


// -----------------------------------------------------------------------------------
//addBlog
// Route to show the Add Blog form
router.get('/addBlog', (req, res) => {
    res.render('addBlog');
  })

// Route to handle form submission and save the blog to the database
router.post('/add-blog', createBlog);

//-----------------------------------------------------------------------------------




module.exports = router;