import UserModel from "~/server/models/User.model";
import { UserSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
    // Get data from body
    const id = event.context.params.id;
    const body = await readBody(event);

    // Validate
    let { error } = UserSchema.validate(body, { abortEarly: true, allowUnknown: true });
    if (error) {
        throw createError({
            message: error.message,
            statusCode: 400,
        });
    }

    try {
        const newUser = await UserModel.findByIdAndUpdate(
            id,
            body,
            { new: true }
        );
        return {message: "User Updated" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }
});