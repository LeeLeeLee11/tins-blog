import {useState} from 'react'

interface FormData {
	email: string,
	password: string,
	repassword: string,
	name: string,
	birthday: string,
}
const Login: React.FC<void> = () => {
	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData)
	}
	const [ formData, setFormData ] = useState<FormData>({ 
		email: '',
		password: '',
		repassword: '',
		name: '',
		birthday: ''
	});
	const onDataChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	return <form onSubmit={handleSubmit} className={ `p-2 m-4 rounded shadow-md flex-col flex max-w-md mx-auto` }>
		<h1 className="p-2 mb-2 text-lg text-gray-500">Đăng ký tài khoản</h1>
		<input name="email" value={formData.email} onChange={onDataChange} className="p-4 mt-2 rounded ring-2 ring-gray-200" placeholder="Địa chỉ Email" />
		<input name="password" value={formData.password} onChange={onDataChange} type="password" className="p-4 mt-2 rounded ring-2 ring-gray-200" placeholder="Mật khẩu" />
		<input name="repassword" value={formData.repassword} onChange={onDataChange} type="password" className="p-4 mt-2 rounded ring-2 ring-gray-200" placeholder="Nhập lại mật khẩu" />
		<input name="name" value={formData.name} onChange={onDataChange} className="p-4 mt-2 rounded ring-2 ring-gray-200" placeholder="Họ và tên" />
		<div className="flex items-center mt-4">
			<button className="p-4 text-white bg-green-400 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600">Đăng ký</button>
		<p className="flex-grow text-right text-blue-800"><a href="/login">Bạn đã có tài khoản?</a></p>
		</div>
		
	</form>
}

export default Login

