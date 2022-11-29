
const express = require('express');
const multer = require('multer');
const path = require('path');
const { createUser } = require('../controllers/userController');

const router = express.Router();


//Multer init 
// const userStorage = multer.diskStorage({
//     destination : (req, file, cb) => {

        
       
//            if ( req.files.user_photo ) {

//             if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/webp' ||  file.mimetype == 'image/gif' ) {
            
//                 cb(null, path.join(__dirname, '../public/images'))
//             } else {
//                 console.log(`Image type invalid`);
//             } 
          

//            } 
//            if (req.files.cv ) {


//                 if (file.mimetype == 'application/pdf' ) {
                
//                     cb(null, path.join(__dirname, '../public/cv'))

//                 } else {
//                     console.log(`CV type invalid`);
//                 }
                
//            }
//     },
//     filename : (req, file, cb) =>{
//         cb(null, Date.now() + '_' + Math.floor(Math.random() * 1000) + '_' + file.originalname)
//     }

// });

// const userMiddlewareMulter = multer({
//     storage : userStorage
// }).fields([
//    {
//     name : "user_photo",
//     maxCount : 5
//    },
//    {
//     name : "cv",
//     maxCount : 1
//    }
// ]);


//Route
router.post('/create', createUser);

//Module exports
module.exports = router;