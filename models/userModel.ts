import mongoose, { model, Schema } from 'mongoose'

export interface IUser {
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

export const User = mongoose.models.User || model('User', UserSchema)

