import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Main from './Main.jsx'
import MenuMobile from './MenuMobile.jsx'
import MessageTop from './MessageTop.jsx'

export default function Application() {
  return (
    <div className="application">
      {"\n \n \n"}
      <MenuMobile />
      {" \n"}
      <MessageTop />
      {"\n"}
      <div className="header-info sf-hidden">
        {"\n \n"}
      </div>
      {"\n"}
      <Header />
      {"\n "}
      <Main />
      {"\n \n"}
      <Footer />
      {"\n \n "}
    </div>
  )
}
