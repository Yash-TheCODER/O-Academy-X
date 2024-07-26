const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");


//resetPasswordToken -> generate token and send URL with Token to the mail of user
const resetPasswordToken = async (req, res) => {
    try {
        const email = req.body.email;                              
        const user = await User.findOne({email: email});           
        if(!user) {                                                
            return res.json({success:false, message:'Your Email is not registered'});
        }
       
        const token = crypto.randomBytes(20).toString("hex");                         //generate token
        const updatedDetails = await User.findOneAndUpdate(          // URL so the URL which will be sent to user to reset password will expire after certain time;
                                        {email:email},
                                        {
                                            token:token,
                                            resetPasswordExpires: Date.now() + 5*60*60*1000,
                                        },
                                        {new:true});                  // {new:true} added because it return updated object so updatedDetails contain updated details;
        
        const url = `http://localhost:3000/update-password/${token}`                              //create url -> 3000 bcoz frontend running on 3000
        await mailSender(email, "Password Reset Link",`Your Link for email verification is ${url}. Please click this url to reset your password.`);   //send mail containing the url
                         
        return res.json({                                                                        
            success:true,
            message:'Email sent successfully, please check email and change pwd',
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong while sending reset pwd mail'
        })
    }
};


//resetPassword/
const resetPassword = async (req, res) => {
    try {
        const {password, confirmPassword, token} = req.body;                  
        if(password !== confirmPassword) {                                   
            return res.json({ success:false,  message:'Password not matching',}); 
        }
       // get userDetails from token
        const userDetails = await User.findOne({token: token});             
        if(!userDetails) {                                                 
            return res.json({ success:false,   message:'Token is invalid',  });
        }

        if(!(userDetails.resetPasswordExpires > Date.now())){                 //token expired or not checking 
                return res.json({success:false,  message:'Token is expired, please regenerate your token', });    
        }
         
        const encryptedPassword = await bcrypt.hash(password, 10);         

        //password update IN DB;
        await User.findOneAndUpdate({token:token}, {password:encryptedPassword}, {new:true}, );
        
        return res.status(200).json({                           
            success:true,
            message:'Password reset successful',
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong while sending reset pwd mail'
        })
    }
};

module.exports =  {resetPasswordToken , resetPassword };