const mongoose = require('mongoose');

// const BlogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   slug: { type: String, required: true, unique: true },
//   category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
//   description: { type: String, required: true },
//   // publishDate: { type: Date, default: Date.now },
//   imageThumbnail: { type: String },
//   imageFeatured: { type: String },
// });


const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true }, // Add this field
  category: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Blog", BlogSchema);

