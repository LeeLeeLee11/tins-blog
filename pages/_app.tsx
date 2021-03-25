import Layout from "../components/Layout";
import Head from 'next/head'
import '../styles/global.css'

const MyApp = ({ Component, pageProp }) => {
  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.2.0/css/all.css" />

		<link rel="stylesheet" href="https://static.fontawesome.com/css/fontawesome-app.css" />
      </Head>
      <Layout>
        <Component {...pageProp} />
      </Layout>
    </>
  )
}

export default MyApp
