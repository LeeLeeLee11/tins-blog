import Layout from "../components/Layout";
import Head from 'next/head'
import '../styles/global.css'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const MyApp : React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.2.0/css/all.css" />

				<link rel="stylesheet" href="https://static.fontawesome.com/css/fontawesome-app.css" />
      </Head>
      <Provider store={store}>
      	<Layout>
					<ToastContainer />
					<Component {...pageProps} />
      	</Layout>
      </Provider>
    </>
  )
}

export default MyApp
