import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SearchResults from '../components/SearchResults'

export default function History() {
  const [index, setIndex] = useState(1)
  const repoState = useSelector((state) => state)
  const { history, loading } = repoState

  return (
    <div className="history">
      <div className="history-left">
        <p className="count">Total requests: {history.length}</p>
        {history && history.map((item, idx) => (
          <div className="history-query active" key={idx} onClick={()=>setIndex(idx)}>
            <p>{ item.qStr }</p>
          </div>
        ))}
      </div>
      <div className="history-right">
        <h2>History</h2>
        {history && <SearchResults repos={history[index].repos} loading={loading} />}
      </div>
    </div>
  )
}
