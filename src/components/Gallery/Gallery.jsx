import "./Gallery.css"
import React from "react"
import { useState, useEffect } from "react"
import Painting from "../pages/Painting/Painting.jsx"
import Loading from "../Loading/Loading.jsx"
import { Link } from "react-router-dom"
import PaintingCard from "../PaintingCard/PaintingCard.jsx"


const Gallery = () => {
  const [artWork, setArtWork] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    setArtWork([])

    fetch(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=20`)
      .then((res) => res.json())
      .then((res) => setArtWork(res.data))
    setLoading(false)

  }, [])
  return (
    <section className="gallery">
      {loading && <Loading />}
      {
        artWork.map((art) => (
          <Link key={art.id} to={`/painting/${art.id}`}>
            <PaintingCard art={art} />
          </Link>

        ))
      }


    </section>
  )
}

export default Gallery