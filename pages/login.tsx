import {useState} from 'react'

const Login: React.FC<void> = () => {
	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
	}

	return <form onSubmit={handleSubmit} className={ `p-2 m-4 rounded shadow-md flex-col flex max-w-md mx-auto` }>
		<input className="p-4 mt-2 rounded ring-2 ring-gray-200" placeholder="Địa chỉ Email" />
		<input className="p-4 mt-2 rounded ring-2 ring-gray-200" placeholder="Mật khẩu" />
		<div className="flex items-center mt-4">
			<button className="p-4 text-white bg-green-400 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600">Đăng nhập</button>
		<p className="flex-grow text-right text-blue-800"><a href="/forgot-password">Quên mật khẩu?</a></p>
		</div>
		
	</form>
}

export default Login

