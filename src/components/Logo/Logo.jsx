import "./Logo.css"
import Home from "../pages/Home/Home.jsx"

const Logo = () => {
  return (
    <div onClick={() => <Home />} className="div-logo">
      <img src="/assets/art-institute-logo.png" alt="art institute chicago logo" />
    </div>
  )
}

export default Logo