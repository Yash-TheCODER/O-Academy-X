const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");
const { mongo, default: mongoose } = require("mongoose");


//createRating
const createRating = async (req, res) => {
    try{
        const userId = req.user.id;                                                   
        const {rating, review, courseId} = req.body;                                
        const courseDetails = await Course.findOne({_id:courseId, studentsEnrolled:{$elemMatch: {$eq: userId} },  });   
                                    
        if(!courseDetails){
            return res.status(404).json({
                success:false,
                message:'Student is not enrolled in the course',
            });
        }
        const alreadyReviewed = await RatingAndReview.findOne({user:userId,  course:courseId,});                              
                                             
        if(alreadyReviewed) {
                    return res.status(403).json({
                        success:false,
                        message:'Course is already reviewed by the user',
                    });
                }
       
        const ratingReview = await RatingAndReview.create({
                                        rating, review, 
                                        course:courseId,
                                        user:userId,
                                    });
       
        
        const updatedCourseDetails = await Course.findByIdAndUpdate({_id:courseId},
                                    {
                                        $push: {ratingAndReviews: ratingReview._id,}
                                    },
                                    {new: true});
    
        return res.status(200).json({                               
            success:true,
            message:"Rating and Review created Successfully",
            ratingReview,
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}


//getAverageRating
const getAverageRating = async (req, res) => {
    try {
            const courseId = req.body.courseId;                             
            
            const result = await RatingAndReview.aggregate([
                {                           // convert string(courseId) into object id
                    $match:{course: new mongoose.Types.ObjectId(courseId),},        //  find all entry in which id of courses is matched with courseId in RatingAndReview models
                },
                {
                    $group:{ _id:null,  averageRating: { $avg: "$rating"},}         //All the entries are grouped into single group due to (_id:null) and then find averageRating
                }
            ])

            if(result.length > 0){                                                 
                return res.status(200).json({
                    success:true,
                    averageRating: result[0].averageRating,      // aggregate function is return array of object so we need to access it by index
                })}
 
            // if no rating is given till now for the course then average ration send is 0
            return res.status(200).json({                                   
                success:true,
                message:'Average Rating is 0, no ratings given till now',
                averageRating:0,
            })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}


//getAllRatingAndReviews
const getAllRating = async (req, res) => {
    try{
            const allReviews = await RatingAndReview.find({}).sort({rating: "desc"})  
                                    .populate({
                                        path:"user",
                                        select:"firstName lastName email image",
                                    })
                                    .populate({
                                        path:"course",
                                        select: "courseName",
                                    })
                                    .exec();

            return res.status(200).json({
                success:true,
                message:"All reviews fetched successfully",
                data:allReviews,
            });
    }   
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    } 
}

module.exports =  {createRating , getAverageRating , getAllRating};