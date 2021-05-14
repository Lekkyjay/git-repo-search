import React from 'react'

export default function ResultsFilter() {
  return (
    <div className="search-results-filter">
      <div className="sort">
        <strong>Sort by:</strong>
        <input type="radio" name="sort" value="default" />
        <label htmlFor="sort-by">default</label>
        <input type="radio" name="sort" value="default" />
        <label htmlFor="sort-by">stars</label>
        <input type="radio" name="sort" value="default" />
        <label htmlFor="sort-by">forks</label>
      </div>
      <div className="order">
        <strong>Order by:</strong>
        <input type="radio" name="sort" value="default" />
        <label htmlFor="sort-by">default</label>
        <input type="radio" name="sort" value="default" />
        <label htmlFor="sort-by">stars</label>
        <input type="radio" name="sort" value="default" />
        <label htmlFor="sort-by">forks</label>
      </div>
      <div className="total-results">
        <p>Total Results: 1500</p>
      </div>
    </div>
  )
}
