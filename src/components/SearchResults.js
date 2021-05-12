import React from 'react'

export default function SearchResults({repos, loading}) {
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
