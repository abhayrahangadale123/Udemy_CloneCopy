let express = require("express");
const courseSchema = require("../Models/courseSchema");
let router = express.Router();
const { model } = require("mongoose");
let {protect,createCourse} = require("../Middlewere/CheckRole")

router.post("/course",protect,createCourse,  async   (req,res)=>{
    let course = req.body;
    
   
    console.log(course);
     let dbUser = await courseSchema.create({
   
        title:course.title,
        description:course.description,
        category:course.category,
        price:course.price,
        level:course.level,
        language:course.language,
        status:course.status,
        videos:course.videos,
        image:course.image,
        resources:course.resources       

    })
    await dbUser.save();   // data base me course ko save kr ke use "GetAllCourse" me get kr lenge yha se GetAllCourse me jayenge
    res.send("Corse create succefully")
    console.log("couse done");
    
  
})

// router.get("/AllCourse", async (req,res)=>{
//     let allCourses = req.body;
//     // console.log("all",allCourses); 
//     let showCourse = await courseSchema.find();
//     res.send(showCourse);
    
    
// })


module.exports = router