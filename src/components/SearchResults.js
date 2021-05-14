import React from 'react'
import { useSelector } from 'react-redux'

export default function SearchResults() {
  const repoState = useSelector((state) => state)
  const { repos, loading } = repoState

  console.log('repos:', repos)
  console.log('repos length:', repos?.length)

  return (
    <>    
    {loading 
      ? (
          <div>Loading ...</div>
        )
      : (
          <>
            {repos?.map(repo => (
              <div class="search-results" key={repo.id}> 
                <div class="repo-name result">
                  <p>{ repo.name }</p>
                  <p><a href={repo.url} target="_blank">{ repo.full_name }</a></p>
                </div>
                <div class="repo-stars result">
                  <p>{ repo.stargazers_count }</p>
                  <p>{ repo.watchers }</p>
                </div>
                <div class="forks result">
                  <p>{ repo.forks }</p>
                  <p>{ repo.open_issues }</p>
                </div>
                <div class="repo-desc result">
                  <p>{ repo.description }</p>
                </div>
                <div class="repo-tags result">
                  <span>{ repo.language }</span>
                  <span>html</span>
                </div>
                <div class="repo-created result">
                  <p>created at: { repo.created_at }</p>
                  <p>updated at: { repo.updated_at }</p>
                </div>
                <div class="repo-owner result">
                  <p>By: { repo.owner.login }</p>
                  <img src={repo.owner.avatar_url} alt="" />
                </div>
              </div>
            ))}
          </>
        )
    }       
    </> 
  )
}
