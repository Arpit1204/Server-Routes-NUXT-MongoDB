import UserModel from "~/server/models/User.model"

export default defineEventHandler(async(event)=>{
   try {
    
    const id = event.context.params.id
    const result = await UserModel.findById(id)
    setResponseStatus(event, 200)
    return result

   } catch (error) {
    
    throw createError({
        message:error.message
    })
   }
})