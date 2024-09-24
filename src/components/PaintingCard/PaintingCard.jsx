import "./PaintingCard.css"

const PaintingCard = ({ art }) => {
  return (
    <div className="painting-card">
      <div className="art-wrp">
        <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
          alt={art.title}
          onError={(e) => e.target.src = "/assets/art-institute-logo.jpg"}
        />
      </div>
      <h3>{art.title}</h3>
    </div>
  )
}

export default PaintingCard