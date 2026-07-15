import Application from './components/Application.jsx'
import Cart from './components/Cart.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import Overlays from './components/Overlays.jsx'

export default function App() {
  return (
    <>
      <CookieBanner />
      <Cart />
      <div className="overlay-shadow" />
      <Application />
      <Overlays />
    </>
  )
}
