import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../components/Pagination'
import ResultsFilter from '../components/ResultsFilter'
import SearchFilter from '../components/SearchFilter'
import SearchResults from '../components/SearchResults'

export default function Search() {
  const repoState = useSelector((state) => state)
  const { repos, loading, error } = repoState

  const [currentPage, setCurrentPage] = useState(1)
  const reposPerPage = 5

  const indexOfLastPost = currentPage * reposPerPage
  const indexOfFirstPost = indexOfLastPost - reposPerPage
  const currentRepos = repos?.slice(indexOfFirstPost, indexOfLastPost)
  
  const totalPage = Math.ceil(repos?.length/reposPerPage)

  const nextPage = () => {
    (currentPage === totalPage) ? setCurrentPage(1) : setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    (currentPage === 1) ? setCurrentPage(totalPage) : setCurrentPage(currentPage - 1)
  }

  return (
    <div>
      <SearchFilter />
      <div className="search-results-container container">
        <ResultsFilter total={repos?.length} />
        <SearchResults repos={currentRepos} loading={loading} error={error} />
        <Pagination 
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPage={totalPage}
        />
      </div>
    </div>
  )
}
