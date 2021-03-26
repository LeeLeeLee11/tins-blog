import mongoose, { model, Schema } from 'mongoose'

interface IUser {
	name: string,
	email: string,
	password: string,
}

const UserSchemaFields: Record<keyof IUser, any> = {
	name: String, // name is not a field of IUser
	email: {
		type: String,
		unique: true,
	},
	password: String
}
const UserSchema = new Schema(UserSchemaFields)

const User = mongoose.models.User || model('User', UserSchema)

export { User }
export type { IUser }


