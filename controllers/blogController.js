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
const slugify = require("slugify");


exports.createBlog = async (req, res) => {
  const { title, category, description } = req.body;
  console.log( "req file:🔥" ,req.file)
  console.log( "req body:🔥" ,req.body)
  console.log(req.file.filename)

  const imagePath = req.file ? req.file.path : null;
  console.log({imagePath});

  try {
    if (!category) {
      return res.status(400).send('Please select a category.');
    }

    let slug = slugify(title, { lower: true, strict: true });

    // Check if the slug already exists
    let existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      slug = `${slug}-${Date.now()}`; // Append timestamp to make the slug unique
    }

    // Create a new blog document
    const newBlog = new Blog({
      title,
      category,
      description,
      slug,
      image: imagePath
    });

    // Save the blog to the database
    await newBlog.save();

    res.redirect("/admin/dashboard/allblogs");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding blog");
  }
};


