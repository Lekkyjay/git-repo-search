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
              <div className="search-results" key={repo.id}> 
                <div className="repo-name result">
                  <p>{ repo.name }</p>
                  <p><a href={repo.url} target="_blank" rel="noreferrer">{ repo.full_name }</a></p>
                </div>
                <div className="repo-stars result">
                  <p>Stars: { repo.stargazers_count }</p>
                  <p>Watchers: { repo.watchers }</p>
                </div>
                <div className="forks result">
                  <p>Forks: { repo.forks }</p>
                  <p>Issues: { repo.open_issues }</p>
                </div>
                <div className="repo-desc result">
                  <p>{ repo.description }</p>
                </div>
                <div className="repo-tags result">
                  <span>{ repo.language }</span>
                  <span>html</span>
                </div>
                <div className="repo-created result">
                  <p>created at: { new Date(repo.created_at).toLocaleDateString() }</p>
                  <p>updated at: { new Date(repo.updated_at).toLocaleDateString() }</p>
                </div>
                <div className="repo-owner result">
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
