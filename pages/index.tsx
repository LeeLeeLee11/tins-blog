import React from 'react';
import 'tailwindcss/tailwind.css'

interface IAppProps {
}

const MainPage : React.FC<IAppProps> = (props: IAppProps) => {
  	return <div className="p-5">
		<p className="text-lg">
			Blog chưa viết gì hết vì mình chưa code xong :))
		</p>
  	</div>;
};

export default MainPage;
