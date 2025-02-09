const mongoose = require('mongoose');
const Category = require('./Category');

// const BlogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   slug: { type: String, required: true, unique: true },
//   category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
//   description: { type: String, required: true },
//   imageThumbnail: { type: String },
//   imageFeatured: { type: String },
// });


const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true }, // Add this field
  // category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  category: { type: String , required: true}, // Reference to Category
  description: { type: String, required: true },
  publishDate: { type: Date, default: Date.now },
  image: {type : String}
});


module.exports = mongoose.model("Blog", BlogSchema);

