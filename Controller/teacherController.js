exports.getTeachers = (req,res,next)=>{
    res.status(200).json({data:[{},{},{}]})
}


exports.addTeacher = (req,res,next)=>{
    res.status(201).json({data:"add new teacher"});
}

exports.updateTeacher = (req,res,next)=>{
    res.status(200).json({data:"update"});
}