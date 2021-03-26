import React from 'react';
import Categories from '../components/Categories'

interface IAppProps {
}

const MainPage : React.FC<IAppProps> = (props: IAppProps) => {
  	return <div className="p-5">
		<h2>Tin không vui</h2>
		<p className="p-2 mb-20 text-lg bg-gray-100 shadow-md">
			Blog chưa viết gì hết vì mình chưa code xong :))
		</p>

		<Categories />
  	</div>;
};

export default MainPage;
