import Link from 'next/link'

export default () => {
	return (<div style={{ zIndex: -1 }} className="absolute top-0 left-0 w-screen h-screen">
	 	 <div className="flex flex-col items-center justify-center h-screen">
		 	 <h1 className="text-8xl">404</h1>
		 	 <p className="text-xl">Page not found</p>

	<p className="text-xl"><Link href='/'>Trở về trang chủ</Link></p>
	 	 </div>
	</div>)
}
