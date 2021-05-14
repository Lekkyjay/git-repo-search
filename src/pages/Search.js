import React from 'react'
import SearchFilter from '../components/SearchFilter'
import SearchResults from '../components/SearchResults'

export default function Search() {
  return (
    <div>
      <SearchFilter />
      <div className="search-results">
        <SearchResults />
      </div>
    </div>
  )
}
