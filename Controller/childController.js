
const {ValidationResult,body}=require('express-validator');

exports.getChildren = (req,res,next)=>{
    res.status(200).json({data:[{},{},{}]})
}

exports.getChildByID = (req,res,next)=>{
    res.status(200).json({data:req.params.id});
}



exports.addChild = (req,res,next)=>{
    res.status(201).json({data:"add new child"});
}

exports.updateChild = (req,res,next)=>{
    res.status(200).json({data:"child"});
}

exports.deleteChild = (req,res,next)=>{
    res.status(200).json({data:"delete Child"});
}