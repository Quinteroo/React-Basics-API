import "./Painting.css"
import Header from "../../Header/Header.jsx"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loading from "../../Loading/Loading.jsx"
import BackButton from "../../BackButton/BackButton.jsx"

const Painting = () => {
  const [artWork, setArtWork] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
      .then((res) => res.json())
      .then((res) => setArtWork(res.data))

  }, [id])



  if (!artWork) {
    return <Loading />
  }



  return (
    <>
      <Header />
      <main>
        <section className="section-artWork-details">
          <div className="div-img-artWork">
            <img
              src={`https://www.artic.edu/iiif/2/${artWork?.image_id}/full/843,/0/default.jpg`}
              alt={artWork?.alt_text}
              onError={(e) => e.target.src = "/assets/imagen-no-disponible.jpg"} />
          </div>
          <div className="div-text-details">
            <h2>{artWork?.title}</h2>
            <p>{artWork?.artist_display}</p>
            <p>{artWork?.place_of_origin}</p>
          </div>

        </section>

        <BackButton />

      </main>

    </>
  )
}

export default Painting