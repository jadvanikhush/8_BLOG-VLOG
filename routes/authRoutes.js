const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin} = require('../controllers/authController');
const { protectAdmin } = require('../middleware/authMiddleware');
const adminRoutes = require('./adminRoutes');
const Blog = require

//firstly login the admin page

router.get('/', (req, res) => {
    res.render('login');
  });
  
//cheak for admin password:
router.post('/login', loginAdmin); 

//redierct kravnu che dashboard ma:

//if login then show
router.get('/dashboard', protectAdmin,(req, res) => {
    res.render('admin-dashboard');
  });
  
router.use('/dashboard',protectAdmin, adminRoutes); 

module.exports = router;
