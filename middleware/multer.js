const path = require('path');
const multer = require('multer');

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './upload/')     // './public/image/' directory name where save the file
    
}, // Directory to save uploaded files
    filename: (req, file, cb) => {
      console.log("🌸",file.originalname)
      
      // cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
      cb(null,file.originalname); // Unique file name

    }
  });
  // Initialize multer
  const upload = multer({
      storage: storage,
      limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
      fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/; // Allowed file types
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);
    
        if (extname && mimetype) {
          cb(null, true);
        } else {
          cb(new Error('Only images are allowed!'));
        }
      }
    });
    
    module.exports = upload;