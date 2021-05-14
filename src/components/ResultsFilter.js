import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortRepos } from '../Redux/actions/repo.actions'

export default function ResultsFilter() {
  const repoState = useSelector((state) => state)
  const { qStr } = repoState
  const dispatch = useDispatch()
  // console.log('qStr from state:', qStr)
  const [sortDefault, setSortDefault] = useState(true)
  const [sortStr, setSortStr] = useState('')

  
  const handleSort = (e) => {
    let tempStr = ''
    console.log('sort:', e.target.value)    
    const { value } = e.target   
    if (value === 'default') {
      setSortDefault(true)
      setSortStr('')
      tempStr = ''
    }
    if (value === 'stars') {
      setSortDefault(false)
      setSortStr('&sort=stars')
      tempStr = '&sort=stars'
    }
    if (value === 'forks') {
      setSortDefault(false)
      setSortStr('&sort=forks')
      tempStr = '&sort=forks'
    }    
    // console.log('tempStr:', tempStr)
    console.log('sortStr:', sortStr)
    dispatch(sortRepos(tempStr))
  }

  const handleOrderBy = (e) => {
    let tempStr = ''
    const { name, value } = e.target
    if (sortStr !== '') {
      if (value === 'desc') {}
    }
  }

  return (
    <div className="search-results-filter">
      <div className="sort">
        <strong>Sort by:</strong>
        <input type="radio" name="sort" value="default" checked={sortDefault} onChange={handleSort} />
        <label htmlFor="sort-by">default</label>
        <input type="radio" name="sort" value="stars" onChange={handleSort} />
        <label htmlFor="sort-by">stars</label>
        <input type="radio" name="sort" value="forks" onChange={handleSort} />
        <label htmlFor="sort-by">forks</label>
      </div>
      <div className="order">
        <strong>Order by:</strong>
        <input type="radio" name="order" value="desc" onChange={handleOrderBy} />
        <label htmlFor="sort-by">desc</label>
        <input type="radio" name="order" value="asc" onChange={handleOrderBy} />
        <label htmlFor="sort-by">asc</label>
      </div>
      <div className="total-results">
        <p>Total Results: 1500</p>
      </div>
    </div>
  )
}
