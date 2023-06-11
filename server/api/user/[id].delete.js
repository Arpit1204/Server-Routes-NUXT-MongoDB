import UserModel from "~/server/models/User.model"

export default defineEventHandler(async(event)=>{
   try {
    
    const id = event.context.params.id
    const result = await UserModel.findByIdAndDelete(id)
    return {
        data:result,
        message:'User deleted'
    }

   } catch (error) {
    
    throw createError({
        message:error.message
    })
   }
})