import React from 'react';
import Categories from '../components/Categories'
import { useAppSelector, useAppDispatch } from '../store/hooks'

const MainPage : React.FC = () => {
  	const { userId } = useAppSelector(state => state.users)
		const dispatch = useAppDispatch();

  	return <div className="p-5">
		<h2>{userId}</h2>
		<button onClick={() => { dispatch({type: 'TICK', payload: 'ok'}) }} className="bg-red-200">Test</button>
		<p className="p-2 mb-20 text-lg bg-gray-100 shadow-md">
			Blog chưa viết gì hết vì mình chưa code xong :))
		</p>

		<Categories />
  	</div>;
};

export default MainPage;
