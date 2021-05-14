import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../components/Pagination'
import ResultsFilter from '../components/ResultsFilter'
import SearchFilter from '../components/SearchFilter'
import SearchResults from '../components/SearchResults'

export default function Search() {
  const repoState = useSelector((state) => state)
  const { repos, loading } = repoState

  return (
    <div>
      <SearchFilter />
      <div className="search-results-container container">
        <ResultsFilter total={repos.length} />
        <SearchResults repos={repos} loading={loading} />
        <Pagination />
      </div>
    </div>
  )
}
