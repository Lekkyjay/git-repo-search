import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Pagination() {
  return (
    <div className="paginate">
      <p>Current page 1 of 12</p>
      <div className="paginate-icons">
        <div className="paginate-icon">
          <FaChevronLeft className="FaChevron" />
        </div>
        <div className="paginate-icon">
          <FaChevronRight className="FaChevron" />
        </div>       
      </div>
    </div>
  )
}
