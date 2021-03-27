import React, {useState} from "react"
import Link from 'next/link'

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
	const [ isHidden, toggleIsHidden ] = useState(true)
	
	const items = [
		{ title: 'Trang chủ', link: '/' },
		{ title: 'Bài viết', link: '/posts' },
		{ title: 'Liên hệ', link: '/contact' },
		{ 
			title: 'Quản lý', 
			link: '#portal', 	

			subMenu: [
				{ title: 'Đăng nhập', link: '/login' },
				{ title: 'Đăng ký', link: '/register' },
			]
		},
	]

	return <nav className={`items-center w-screen shadow-md md:flex bg-white transition-all ease-out`}>

		<a className="inline-block p-4 cursor-pointer select-none md:hidden" onClick={() => toggleIsHidden(!isHidden)}>
			<i className="far fa-lg fa-bars"></i>
		</a>
		<Link href='/'>
			<a className="inline-block p-2 text-xl hover:text-red-500 transition-all duration-300 hover:font-bold">tindoesblog</a>
		</Link>
		<ul className={`flex flex-grow transform justify-end list-none appearance flex-col md:flex-row ${isHidden ? '-translate-y-6 opacity-0 nav-collapsed -z-1 hidden md:z-0 md:translate-y-0 md:opacity-100 md:flex' : ''}`}>
			{
				items.map((value, index) => {
					const { subMenu } = value;

					return <li key={index} className="relative group" onClick={() => toggleIsHidden(true)}>
						<Link href={value.link}>
							<a className="block p-5 hover:bg-gray-200">{value.title}</a>
						</Link>
						<ul className={`absolute top-auto opacity-0 group-hover:opacity-100 w-screen md:w-auto ml-0 md:-ml-6 bg-white shadow-md transition-opacity duration-500`}>
						{ subMenu && subMenu.map((item, index) => 
							<li key={index} className="">
								<Link href={item.link}>
									<a className="block p-5 hover:bg-gray-200" onClick={() => toggleIsHidden(true)}>{item.title}</a>
								</Link>
							</li>
						)}
						</ul>
					</li>
				})
			}
		</ul>
	</nav>
}

export default Navbar
