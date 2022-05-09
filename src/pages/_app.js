import "../scss/global.scss";
import { Header } from "../components/Header/header.js";
import Footer from "../components/Footer/footer.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps}/>
      <Footer/>
    </>
    ) 
}

export default MyApp
