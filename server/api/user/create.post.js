import UserModel from "~/server/models/User.model";
import { UserSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
	// Get data form body
	const body = await readBody(event);

	// validate
	let {error} = UserSchema.validate(body);
	if (error) {
		throw createError({
			message: error.message,
			statusCode: 400,
		});
	}

	try {
		const newUser = await UserModel.create(body);
		return {data:newUser, message: "User created" };
	} catch (e) {
		throw createError({
			message: e.message,
		});
	}
});