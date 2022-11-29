// const emailSend = require("../utility/sendMail");
// const sendSms = require("../utility/sendSMS");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

/**
 * 
 * create User
 */
const createUser = (req, res)=> {

    const { name, email, pass, cell, skill} = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt)

    //bcrypt comare
    // console.log(bcrypt.compareSync(req.body.pass, '$2a$10$sLOrLqgcBPK7iow64GGTJO.I0GZ0RtcJjmS4qECTwKyMCRfNG.aL.'));

    const token = jwt.sign({ name, email, pass, cell, skill }, process.env.JWT_SECRET, {
        expiresIn : '60s'
    });

    // const token_verify = jwt.verify('', process.env.JWT_SECRET)

    // console.log(token_verify);

   res.cookie('authToken', token, {
    expires: new Date( Date.now() + (1000*60) )
   }).json({
    token : token,
    pass : hash
   }) 

}


//Module exports
module.exports = {
    createUser
}