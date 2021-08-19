import connectDB from '../../../utils/connectDB'
import {User} from '../../../models/userModel'
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken } from '../../../utils/generateToken'
import { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'js-cookie'

connectDB()

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch(req.method) {
		case "POST": 
			await login(req, res)
			break
		default:
			res.status(400).json({error: {message: 'Not authorized'}})
	}
}

const login = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email })
		if(!user) return res.status(400).json({error: {message: 'Email does not exist'}})

		const isMatch = await bcrypt.compare(password, user.password)
		if(!isMatch) return res.status(400).json({error: {message: 'Incorrect password'}})

		const access_token = createAccessToken({id: user._id})
    const refresh_token = createRefreshToken({id: user._id})

    	Cookies.set('access_token', refresh_token, { 
    	path: 'api/auth/accessToken',
    	expires: 7
    })

		return res.json({
			success: {
				message: 'Login success',
				refresh_token,
				access_token,
				user: {
					name: user.name,
					email: user.email,
					//avatar: user.avatar
				}
			}
		})
	}
	catch(error) {
		return res.status(500).json({error: {message: error.message}})
	}
}
