import UserModel from "~/server/models/User.model";
import { UserSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
	// Get data form body
    const id = event.context.params.id
	const body = await readBody(event);


	try {
		const newUser = await UserModel.findOneAndUpdate(
            { _id: id },
            {
               ...body,
            }
          );
		return {message: "User Updated" };
	} catch (e) {
		throw createError({
			message: e.message,
		});
	}
});