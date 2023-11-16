const express = require('express')
const router = express.Router()
const User = require('../models/user')
const {body, validatorResult, validationResult} = require('express-validator');                                                                                                                                                                   

router.use(express.json());

router.post("/creatuser",[
body('email', 'Enter valid Email').isEmail(),
body('name',' Enter valid name').isLength({min:5}),
body('password', 'Enter valid password').isLength({min:5}),
], 
async (req, res) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try {
       await User.create({
            name:req.body.name,
            password: req.body.password,
            email:req.body.email,
            location:req.body.location
        })

        res.json({success:true});
    } catch (error) {
        console.log(error)
        res.json({success:true});
    }

})

module.exports = router;