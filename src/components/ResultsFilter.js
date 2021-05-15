import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortRepos } from '../Redux/actions/repo.actions'

export default function ResultsFilter({ total }) {
  const dispatch = useDispatch()
  const [sortDefault, setSortDefault] = useState(true)
  const [sortStr, setSortStr] = useState('')
  const [orderStr, setOrderStr] = useState('')

  
  const handleSort = (e) => {
    let tempStr = ''
    console.log('sort:', e.target.value)    
    const { value } = e.target   
    if (value === 'default') {
      setSortDefault(true)
      setSortStr('')
      tempStr = ''
    } else {
      setSortDefault(false)
      setSortStr('&sort=' + value)
      tempStr = '&sort=' + value
    }
    console.log('sortStr:', sortStr)
    dispatch(sortRepos(tempStr + orderStr))
  }

  const handleOrderBy = (e) => {
    let tempStr = ''
    const { value } = e.target
    if (sortStr === '') {
      setOrderStr('&order=' + value)
      tempStr = ''
    } else {
      setOrderStr('&order=' + value)
      tempStr = sortStr + '&order=' + value
    }
    dispatch(sortRepos(tempStr))
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
        <p>Total Results: { total }</p>
      </div>
    </div>
  )
}
