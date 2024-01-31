import "./index.css"

const VISIBLE_PAGES = 5
const DEFAULT_CENTER_PAGE = 3

type Props = {
  numberOfPages: number
  currentPage: number
  setCurrentPage: (page: number) => void
}

const PageSelector = ({
  numberOfPages,
  currentPage,
  setCurrentPage,
}: Props) => {
  const lastCenterPage = numberOfPages - 2

  const getPages = () => {
    if (numberOfPages < VISIBLE_PAGES)
      return new Array(numberOfPages).fill("").map((_n, i) => i)
    if (currentPage < DEFAULT_CENTER_PAGE) return [0, 1, 2, 3, 4]
    if (currentPage > lastCenterPage)
      return [
        numberOfPages - 4,
        numberOfPages - 3,
        numberOfPages - 2,
        numberOfPages - 1,
        numberOfPages,
      ]
    return [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ]
  }
  const pages = getPages()
  return (
    <div className="pageselector-container">
      {pages.length > 1 &&
        pages.map((page) => (
          <button
            key={page}
            className={`page ${page === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(page)}
          >
            {page + 1}
          </button>
        ))}
    </div>
  )
}

export default PageSelector
