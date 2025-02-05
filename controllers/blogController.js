const Blog = require('../models/Blog');
// const Category = require('../models/Category');

// Get all blogs for users
// exports.getAllBlogs = async (req, res) => {
//     try {
//         const blogs = await Blog.find().populate('category');
//         res.render('/user/home', { blogs });
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching blogs' });
//     }
// };

// Get single blog detail for users
// exports.getBlogDetail = async (req, res) => {
//     const { slug } = req.params;
//     try {
//         const blog = await Blog.findOne({ slug }).populate('category');
//         res.render('/user/blogDetail', { blog });
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching blog details' });
//     }
// };

// Admin: Create a new blog
exports.createBlog = async (req, res) => {
    const { title, category, description } = req.body;
  
    console.log(req.body)
    try {
      // Create a new blog document
      const newBlog = new Blog({
        title,
        category,
        description
      });
  
      // Save the blog to the database
      await newBlog.save();
  
      // Redirect to a page that shows all blogs or a success page
      res.redirect('/admin/dashboard/allBlogs');  // For example, redirect to all blogs page
    } catch (error) {
      console.error(error);
      // res.status(500).send('Error adding blog');
      res.status(500).send({ error : error.message });

    }
};
