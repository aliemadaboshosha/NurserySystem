exports.getClasses = (req,res,next)=>{
    res.status(200).json({data:"all classes data"});
}

exports.addClass = (req,res,next)=>{
    res.status(201).json({data:"add new class"})
}

exports.updateClass = (req,res,next)=>{
    res.status(200).json({data:"update a class"})
}

exports.deleteClass = (req,res,next)=>{
    res.status(200).json({data:"deleted class"})
}

exports.getClassById = (req,res,next)=>{
    res.status(200).json({data:req.params.id})
}

exports.getClassChildrenById = (req,res,next)=>{
    res.status(200).json({data:"child id = "+req.params.id})
}

exports.getClassTeacherById = (req,res,next)=>{
    res.status(200).json({data:"teacher id = "+req.params.id})
}
