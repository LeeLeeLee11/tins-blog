import React, {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import router from 'next/router'
import { useAppDispatch } from '../store/hooks'
import Head from 'next/head'

interface StateProps {
	email: string,
	password: string,
}

const Login: React.FC= () => {
	const [input, setInput] = useState<StateProps>({email: '', password: ''})
	const dispatch = useAppDispatch()

	const handleSubmit = (e) => {
		e.preventDefault();

		const { email, password } = input;

		axios.post('/api/auth/login', { 
			email,
			password
		}).then((res) => {
			const { access_token, user, message } = res.data.success

			dispatch({ type: 'AUTH', payload: {
      	token: access_token,
      	user
    	}})

			toast.success(message)

			setTimeout(() => { router.push('/') }, 3000)
		}).catch(err => {
			toast.error(err.message)
		})

	}

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput({...input, [e.target.name]: e.target.value})
	}

	return <div>
		<Head>
			<title>Đăng nhập - tinsblog</title>
		</Head>
		<form onSubmit={handleSubmit} className={ `p-2 m-4 rounded shadow-md flex-col flex max-w-md mx-auto` }>

		<h1 className="p-2 mb-2 text-lg text-gray-500">Đăng nhập</h1>
		<input onChange={handleOnChange} name="email" className="p-4 mt-2 border rounded" placeholder="Địa chỉ Email" />
		<input onChange={handleOnChange} name="password" className="p-4 mt-2 border rounded" type="password" placeholder="Mật khẩu" />
		<div className="flex items-center mt-4">
			<button className="p-4 text-white bg-green-400 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600">Đăng nhập</button>
		<p className="flex-grow text-right text-blue-800"><a href="/forgot-password">Quên mật khẩu?</a></p>
		</div>

		</form>		
		</div>
}

export default Login

