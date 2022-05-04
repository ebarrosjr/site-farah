import "../scss/global.scss";
import Header from "../components/header.js"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps}/>
    </>
    ) 
}

export default MyApp
