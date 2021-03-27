export const valid = (name: string, email: string, password: string, repassword: string) : string => {
	if(password !== repassword) return 'Mật khẩu xác nhận không đúng'
	if(password.length < 6) return 'Mật khẩu phải có ít nhất 6 kí tự'
	if(name.length < 6 || name.length > 32) return 'Họ và tên quá dài hoặc quá ngắn'
	if(!validateEmail(email)) return 'Email không hợp lệ'
	return null
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
