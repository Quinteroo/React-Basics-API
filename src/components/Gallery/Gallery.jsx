import "./Gallery.css"
import React from "react"
import { useState, useEffect } from "react"
import Loading from "../Loading/Loading.jsx"
import { Link } from "react-router-dom"
import PaintingCard from "../PaintingCard/PaintingCard.jsx"
import Pagination from "../Pagination/Pagination.jsx"


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

  }, [page])

  if (loading) {
    return <Loading />
  }



  return (
    <section className="gallery">

      {
        artWork.map((art) => (
          <Link key={art.id} to={`/painting/${art.id}`}>
            <PaintingCard art={art} />
          </Link>

        ))
      }

      <Pagination page={page} setPage={setPage} />

    </section>
  )
}

export default Gallery