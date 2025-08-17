import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Course name is required"],
      trim: true,
      minlength: [3, "Course name must be at least 3 characters long"],
      maxlength: [100, "Course name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    price: {
      type: Number,
      required: [true, "Course price is required"],
      min: [1, "Price must be greater than 0"],
    },
    category: {
      type: String
    },
    instructor: {
      type: String,
      required: [true, "Instructor name is required"],
      trim: true,
    },
   user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
   }
  },
  { timestamps: true } 
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
