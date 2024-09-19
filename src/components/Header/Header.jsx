import Logo from "../Logo/Logo"
import "./Header.css"

const Header = () => {
  return (
    <header>
      <Logo />
      <a href="https://github.com/Quinteroo" target="_blank" rel="noopener noreferrer">GitHub</a>
    </header>
  )
}

export default Header