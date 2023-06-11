import mongoose from "mongoose";


const schema= new mongoose.Schema(
	{
		name: {
			type: String,
			requied: true,
		},
        email:{
            type:String,
            required:true
        }
        ,
        admissionNumber:{
            type:String,
            required:true
        }
	},
	{ timestamps: true }
);


export default mongoose.model("UserTest", schema);