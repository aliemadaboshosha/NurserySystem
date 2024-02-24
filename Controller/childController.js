
const {ValidationResult,body}=require('express-validator');
const Child = require('../models/child');

exports.getChildren = (req,res,next)=>{
    // res.status(200).json({data:[{},{},{}]})
    Child.find().then((children)=>{
        res.status(200).json({data:children});
    }).catch((err)=>{
        res.status(500).json({error:err});
    });
}

exports.getChildByID = (req,res,next)=>{
    // res.status(200).json({data:req.params.id});
    //get the id from the request
    const id = req.params.id;
    //find the child by id
    Child.findById(id).then((child)=>{
        res.status(200).json({data:child});
    }).catch((err)=>{
        res.status(500).json({error:err});
    });
}



exports.addChild = (req,res,next)=>{
 //   res.status(201).json({data:"add new child"});
 //validate the request
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    //create a new child
    const child = new Child({
        name:req.body.name,
        age:req.body.age,
        image:req.body.image,
        class:req.body.class
    });
    //save the child
    child.save().then((result)=>{
        res.status(201).json({data:result});
    }).catch((err)=>{
        res.status(500).json({error:err});
    });


}

exports.updateChild = (req,res,next)=>{
    // res.status(200).json({data:"child"});
    //validate the request
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    //get the id from the request
    const id = req.params.id;
    //find the child by id
    Child.findById(id).then((child)=>{
        //update the child
        child.name = req.body.name;
        child.age = req.body.age;
        child.image = req.body.image;
        child.class = req.body.class;
        //save the child
        return child.save();
    }).then((result)=>{
        res.status(200).json({data:result});
    }).catch((err)=>{
        res.status(500).json({error:err});
    });


}

exports.deleteChild = (req,res,next)=>{
    // res.status(200).json({data:"delete Child"});
    //get the id from the request
    const id = req.params.id;
    //find the child by id and delete
    Child.findByIdAndDelete(id).then((result)=>{
        res.status(200).json({data:result});
    }).catch((err)=>{
        res.status(500).json({error:err});
    });
    
}