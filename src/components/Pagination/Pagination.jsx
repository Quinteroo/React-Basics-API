import "./Pagination.css"

const Pagination = ({ page, setPage }) => {
  return (
    <div className="div-pagination" >
      <button disabled={page === 1} onClick={() => setPage(page - 1)} >{"<"}</button>
      <p>{page}</p>
      <button disabled={page === 30} onClick={() => setPage(page + 1)} >{">"}</button>
    </div>
  )
}

export default Pagination