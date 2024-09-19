import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="div-video">
        <video src="/assets/IAC-hero-video.mp4" autoPlay muted loop></video>
      </div>
      <div className="div-slogan">
        <p>Welcome to the Art Institute of <br />Chicago</p>
      </div>

    </section>
  )
}

export default Hero