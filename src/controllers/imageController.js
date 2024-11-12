const multer = require('multer');
const path = require('path');
const fs = require('fs');
// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directory where the files will be saved
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to file name
    }
  });

  // Set up the upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // Limit to 2MB
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/;
      const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
      const mimeType = fileTypes.test(file.mimetype);
    //   console.log('aaaa')
    //   console.log(extname)
    //   console.log(mimeType)
    //   console.log(path.extname(file.originalname).toLowerCase())
    //   console.log(file.mimetype)
    //   console.log(file)
    //   console.log('aaaa')
    //   console.log('aaaa')
      if (extname && mimeType) {
        return cb(null, true);
      } else {
        cb('Error: Images only!');
      }
    }
  });


  // Endpoint to handle image upload
exports.uploadImage= upload.single('image'), (req, res) => {
    console.log('aaaa')
    console.log(req.file)
    try {
        console.log('bbbb')
      res.send({ message: 'Image uploaded successfully', file: req.file });
    } catch (error) {
        console.log('cccc') 
      res.status(400).send({ message: 'Error uploading image', error });
    }
  };


    // Endpoint to handle image upload
exports.uploadPhoto= async  (req, res) => {

    try {
        console.log(req.body)
        console.log(req.file)
        // console.log(req)
        console.log('bbbb')
      res.send({ message: 'Image uploaded successfully',  });
    } catch (error) {
        console.log('cccc') 
      res.status(400).send({ message: 'Error uploading image', error });
    }
  };