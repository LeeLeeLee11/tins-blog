import {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import {AxiosResponse} from 'axios'
import axios from 'axios'
import {toast} from 'react-toastify'
import router from 'next/router'
import { useAppSelector } from '../store/hooks'
import {RootState} from '../store/store'

type FormData = {
	email: string,
	password: string,
	repassword: string,
	name: string,
	birthday: string,
}

type LoginSuccess = {
	success: {
		message: string,
	}	
}

const Login: React.FC<void> = () => {
	const { handleSubmit, register, errors } = useForm<FormData>();
	const onSubmit = () => {
		console.log(formData)
		const { name, email, password, repassword } = formData
		axios.post<any>('/api/auth/register', { 
			name, email, password, repassword
		}).then((value: AxiosResponse<LoginSuccess>) => {
			toast.success(value.data.success.message);

		}).catch((err) => {
			toast.error(err.message)
		})
	}
	const [ formData, setFormData ] = useState<FormData>({ 
		email: '',
		password: '',
		repassword: '',
		name: '',
		birthday: ''
	});

	const onDataChange = (e) => {
		const { name, value } = e.target;
		if(name == undefined) return;

		setFormData({...formData, [name]: value})
	}

	const { auth } = useAppSelector<RootState>(state => state)

	useEffect(() => {
    if(auth.token.length >  0) router.push("/")
  }, [auth])


	return <form onSubmit={handleSubmit(onSubmit)} className={ `p-2 m-4 rounded shadow-md flex-col flex max-w-md mx-auto` }>
		<h1 className="p-2 mb-2 text-lg text-gray-500">Đăng ký tài khoản</h1>
		{errors.email && <label className="p-2 mt-2 bg-red-200">{errors.email.message}</label>}
		<input 
			name="email" 
			value={formData.email} 
			onChange={onDataChange} 
			ref={register({
				required: "Required",
				pattern: {
					value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
					message: "Địa chỉ email không hợp lệ",
				}
			})}
			className={`p-4 mt-2 rounded border${formData.email != '' ? (errors.email ? ' bg-red-100' : ' bg-green-100') : ''}`} placeholder="Địa chỉ Email" />
		<input 
			name="password" 
			value={formData.password} 
			onChange={onDataChange} 
			type="password" 
			className="p-4 mt-2 border rounded" placeholder="Mật khẩu" />
		<input 
			name="repassword" 
			value={formData.repassword} 
			onChange={onDataChange} 
			type="password" 
			className={`p-4 mt-2 rounded border${formData.repassword !== '' && formData.password == formData.repassword ? ' bg-green-100' : ''}`} placeholder="Nhập lại mật khẩu" />
		<input 
			name="name" 
			value={formData.name} 
			onChange={onDataChange} 
			className="p-4 mt-2 border rounded" placeholder="Họ và tên" />
		<div className="flex items-center mt-4">
			<button className="p-4 text-white bg-green-400 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600">Đăng ký</button>
		<p className="flex-grow text-right text-blue-800"><a href="/login">Bạn đã có tài khoản?</a></p>
		</div>
		
	</form>
}

export default Login

