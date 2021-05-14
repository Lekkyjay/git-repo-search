import React from 'react'
import Pagination from '../components/Pagination'
import ResultsFilter from '../components/ResultsFilter'
import SearchFilter from '../components/SearchFilter'
import SearchResults from '../components/SearchResults'

export default function Search() {
  return (
    <div>
      <SearchFilter />
      <div className="search-results-container container">
        <ResultsFilter />
        <SearchResults />
        <Pagination />
      </div>
    </div>
  )
}
