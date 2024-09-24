import "./BackButton.css"

import { Link } from "react-router-dom"

const BackButton = () => {
  return (
    <Link to={"/"} className="back-button">
      <div className="div-back-button">
        <img src="/assets/back-button.png" />

      </div>
    </Link>
  )
}

export default BackButton