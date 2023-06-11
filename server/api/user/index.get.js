import UserModel from "~/server/models/User.model"

export default defineEventHandler(async()=>{
   try {
    
    const result = await UserModel.find().sort({name:1});
    return result
   } catch (error) {
    throw createError({
        message:error.message
   })
   }
})