import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Pagination({prevPage, nextPage, currentPage, totalPage}) {  

  return (
    <div className="paginate">
      <p>Current page {currentPage} of {totalPage}</p>
      <div className="paginate-icons">
        <div className="paginate-icon" onClick={prevPage}>
          <FaChevronLeft className="FaChevron" />
        </div>
        <div className="paginate-icon" onClick={nextPage}>
          <FaChevronRight className="FaChevron" />
        </div>       
      </div>
    </div>
  )
}
