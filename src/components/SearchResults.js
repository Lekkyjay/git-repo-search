import React from 'react'
import { useSelector } from 'react-redux'

export default function SearchResults() {
  const repoState = useSelector((state) => state)
  const { repos, loading } = repoState

  return (
    <>
    <h1>Search results:</h1>
    {loading 
      ? (
          <div>Loading ...</div>
        )
      : (
          <ul>
            {repos.items.map(repo => (
              <li key={repo.id}>{ repo.name }</li>
            ))}
          </ul>
        )
    }       
    </> 
  )
}
