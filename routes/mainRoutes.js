const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Render the "home" EJS view, passing data to the template
    res.render('Main_dashboard');
  });

//go for next admin_login routes

module.exports = router;
