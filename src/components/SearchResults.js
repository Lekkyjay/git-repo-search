import React from 'react'
import { useSelector } from 'react-redux'

export default function SearchResults() {
  const repoState = useSelector((state) => state)
  const { repos, loading } = repoState

  console.log('repos:', repos?.items)
  console.log('repos length:', repos?.items?.length)

  return (
    <>    
    {loading 
      ? (
          <div>Loading ...</div>
        )
      : (
          <>
            {repos?.items.map(repo => (
              <div class="search-results" key={repo.id}> 
                <div class="repo-name result">
                  <strong>Repo name</strong>
                  <p>{ repo.name }</p>
                </div>
                <div class="repo-stars result">
                  <p>stars 5</p>
                  <p>watchers 5</p>
                </div>
                <div class="forks result">
                  <p>forks 5</p>
                  <p>Issues 5</p>
                </div>
                <div class="repo-desc result">
                  <p>
                    repo description text will go here
                    repo description text will go here     
                  </p>
                </div>
                <div class="repo-tags result">
                  <span>html</span>
                  <span>Javascript</span>
                </div>
                <div class="repo-created result">
                  <p>created at: 2020.05.01</p>
                  <p>updated at: 2020.05.01</p>
                </div>
                <div class="repo-owner result">
                  <p>By: Owner name</p>
                </div>
              </div>
            ))}
          </>
        )
    }       
    </> 
  )
}
