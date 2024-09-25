import Logo from "../Logo/Logo"
import "./Header.css"

const Header = () => {
  return (
    <header>
      <Logo />
      <a className="github" href="https://github.com/Quinteroo/React-Basics-API" target="_blank" rel="noopener noreferrer">GitHub</a>
    </header>
  )
}

export default Header