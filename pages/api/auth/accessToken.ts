import connectDB from '../../../utils/connectDB'
import { User } from '../../../models/userModel'
import jwt from 'jsonwebtoken'
import { createAccessToken } from '../../../utils/generateToken'
import { NextApiRequest, NextApiResponse } from 'next'

connectDB()

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const rf_token = req.cookies.refreshtoken;
		if(!rf_token) return res.status(400).json({error: {message: 'You are not logged in.'}})

		const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
		if(!result) return res.status(400).json({error: {message: 'Your token is incorrect or expired.'}})

		const user = await User.findById(result)
		if(!user) return res.status(400).json({error: {message: 'User does not exist.'}})
		const access_token = createAccessToken({id: user._id})	
		res.json({
			access_token,
			user: {
				name: user.name,
				email: user.email
			}
		})

	}
	catch(error) {
		return res.json(error)
	}
	
}
