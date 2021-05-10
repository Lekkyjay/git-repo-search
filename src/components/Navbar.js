import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false)

  return (
    <nav>
      <div className="nav-container container">
        <h1>Repo Search App</h1>
        <ul className="nav">
          <li>
            <NavLink exact to="/">Search</NavLink>
          </li>
          <li><NavLink to="/history">History</NavLink></li>
        </ul>
        <div className="more">
          {/* <button>More</button> */}
          { dropDown 
              ? <FaCaretUp className="caret-icon" onClick={()=>setDropDown(!dropDown)} /> 
              : <FaCaretDown className="caret-icon" onClick={()=>setDropDown(!dropDown)}/> 
          }
          
          { dropDown && 
            <div className="dropdown">          
              <ul>
                <li><NavLink to="/page1" onClick={()=>setDropDown(false)}>Page 1</NavLink></li>
                <li><NavLink to="/page2" onClick={()=>setDropDown(false)}>Page 2</NavLink></li>
              </ul>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}
