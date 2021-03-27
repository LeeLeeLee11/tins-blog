import {NextApiRequest, NextApiResponse} from 'next'
import connectDB from '../../../utils/connectDB'
import { valid } from '../../../utils/valid'
import bcrypt from 'bcrypt'
import { User } from '../../../models/userModel'

connectDB()

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { name, email, password, repassword } = req.body

		const err = valid(name, email, password, repassword);
		if(err != null) throw err

		var passwordHash = await bcrypt.hash(password, 12)

		console.log(passwordHash)
		const newUser = new User({
			name, email, password: passwordHash
		})

		await newUser.save()

		res.json({ success: { message: 'Đăng ký thành công', data: {
			name, email, id: newUser._id 
		}}})
	}
	catch(err) {
		return res.status(500).json({error: {message: err}})
	}
}
