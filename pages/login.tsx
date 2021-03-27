import React, {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

interface StateProps {
	email: string,
	password: string,
}

const Login: React.FC= () => {
	const [input, setInput] = useState<StateProps>({email: '', password: ''})

	const handleSubmit = (e) => {
		const { email, password } = input;

		axios.post('/api/auth/login', { 
			email,
			password
		}).then((value) => {
			console.log(value)
			toast.success(value)
		}).catch(err => {
			toast.error(err.message)
			console.log(err)
		})
		e.preventDefault();
	}

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput({...input, [e.target.name]: e.target.value})
	}

	return <form onSubmit={handleSubmit} className={ `p-2 m-4 rounded shadow-md flex-col flex max-w-md mx-auto` }>
		<h1 className="p-2 mb-2 text-lg text-gray-500">Đăng nhập</h1>
		<input onChange={handleOnChange} name="email" className="p-4 mt-2 border rounded" placeholder="Địa chỉ Email" />
		<input onChange={handleOnChange} name="password" className="p-4 mt-2 border rounded" placeholder="Mật khẩu" />
		<div className="flex items-center mt-4">
			<button className="p-4 text-white bg-green-400 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600">Đăng nhập</button>
		<p className="flex-grow text-right text-blue-800"><a href="/forgot-password">Quên mật khẩu?</a></p>
		</div>
		
	</form>
}

export default Login

