import React from 'react'

export default function History() {
  return (
    <div className="history">
      <div className="history-left">
        <p className="count">Total requests: 15</p>
        <div className="history-query active">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, vero.</p>
        </div>
        <div className="history-query">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, vero.</p>
        </div>
        <div className="history-query">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, vero.</p>
        </div>
        <div className="history-query">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, vero.</p>
        </div>
        <div className="history-query">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, vero.</p>
        </div>
        <div className="history-query">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, vero.</p>
        </div>
        <div className="history-query">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, vero.</p>
        </div>
        <div className="history-query">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, vero.</p>
        </div>
        <div className="history-query">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, vero.</p>
        </div>
      </div>
      <div className="history-right">
        <h1>History</h1>
        <div className="search-results"> 
          <div className="repo-name result">
            <p>repo name</p>
            <p><a href="" target="_blank"> repo full name</a></p>
          </div>
          <div className="repo-stars result">
            <p>Stars:  repo stargazers count </p>
            <p>Watchers:  repo.watchers </p>
          </div>
          <div className="forks result">
            <p>Forks:  repo.forks </p>
            <p>Issues:  repo.open_issues </p>
          </div>
          <div className="repo-desc result">
            <p> repo.description </p>
          </div>
          <div className="repo-tags result">
            <span> repo.language </span>
            <span>html</span>
          </div>
          <div className="repo-created result">
            <p>created at: 2020.03.04 </p>
            <p>updated at: 2020.03.04 </p>
          </div>
          <div className="repo-owner result">
            <p>By:  repo.owner.login </p>
            <img src="repo.owner.avatar_url" alt="" />
          </div>
        </div>        
      </div>
    </div>
  )
}
