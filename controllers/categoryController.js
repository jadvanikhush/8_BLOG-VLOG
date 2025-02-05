const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = new Category({ name });
    await category.save();
    res.redirect('/allcategories');
    // res.status(201).json({ message: 'Category created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating category' });
  }
};
