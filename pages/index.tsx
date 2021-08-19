import React from 'react';
import Categories from '../components/Categories'
import NewPosts from '../components/NewPosts'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import Head from 'next/head'

const MainPage : React.FC = () => {
  	const { token } = useAppSelector(state => state.auth)
		const dispatch = useAppDispatch();

  	return <div className="p-5 break-words">

		<Head>
			<title>Trang chủ - tinsblog</title>
		</Head>

		{/* <h2>{ token }</h2>
		<button onClick={() => { dispatch({type: 'TICK', payload: 'ok'}) }} className="p-2 bg-red-200">Test</button>
		<p className="p-2 mb-20 text-lg bg-gray-100 shadow-md">
			Blog chưa viết gì hết vì mình chưa code xong :))
		</p> */}
		<NewPosts />
		<Categories />
  	</div>;
};

export default MainPage;
