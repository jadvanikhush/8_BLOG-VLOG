const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  console.log(req.body.name)
  try {
    const category = new Category({ name });
    await category.save();
    res.redirect('/admin/dashboard/allCategories');
  } catch (error) {
    res.status(500).json({ message: 'Error creating category' });
  }
};
