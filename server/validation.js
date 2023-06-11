import Joi from "joi";


export const UserSchema = Joi.object({
	name: Joi.string().min(3).required(),
    email: Joi.string().min(3).required().email(),
    admissionNumber:Joi.string().min(3).required(),
});