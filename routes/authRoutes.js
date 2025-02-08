const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin} = require('../controllers/authController');
const { protectAdmin } = require('../middleware/authMiddleware');
const adminRoutes = require('./adminRoutes');
const Blog = require("../models/Blog");
const Category = require("../models/Category");

//firstly login the admin page

router.get('/', (req, res) => {
    res.render('login');
  });
  
//cheak for admin password:
router.post('/login', loginAdmin); 


router.get('/search-blogs', async (req, res) => {
  const searchCategory = req.query.category;

  try {
    // If a category search is provided, find blogs by category
    let blogs;
    if (searchCategory) {
      // Find the category by name (case-insensitive search)
      const category = await Category.findOne({ name: new RegExp(searchCategory, 'i') }); // 'i' for case-insensitive search
      if (category) {
        // Find blogs that are associated with the selected category
        blogs = await Blog.find({ category: category._id }).populate('category');
      } else {
        blogs = [];
      }
    } else {
      // If no search category is provided, show all blogs
      blogs = await Blog.find().populate('category');
    }

    // Render the result page with the blogs
    res.render('search-blogs', { blogs });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving blogs');
  }
});



//if login then show
router.get('/dashboard', protectAdmin,(req, res) => {
    res.render('admin-dashboard');
  });
  
router.use('/dashboard',protectAdmin, adminRoutes); 



module.exports = router;
