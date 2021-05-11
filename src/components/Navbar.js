import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaCaretDown, FaCaretUp, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <nav>
      <div className="nav-container container">
        <h1>Repo Search App</h1>
        <div className={ mobileNav ? "nav-container-inner active" : "nav-container-inner"}>
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
        <div className="mobile-nav-icon" onClick={()=>setMobileNav(!mobileNav)}>
          { mobileNav ? <FaTimes className='fa-times' /> : <FaBars className='fa-bars' /> }
        </div>
      </div>
    </nav>
  )
}
