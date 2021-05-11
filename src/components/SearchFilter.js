import React, { useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import { BiChevronsDown, BiChevronsUp } from 'react-icons/bi'

export default function SearchFilter() {
  const [advanced, setAdvanced] = useState(false)

  return (
    <section className={ advanced ? "filters container" : "filters container closed" }>
      <form>
        <div className="top-filter">
          <div className="top-filter-top">
            <div className="search-by top-filter-item">
              <label htmlFor="search-by">Search by:</label>
              <input type="text" name="search-by" />
            </div>
            <div className="search-in">
              <label htmlFor="in">In:</label>
              <input type="checkbox" name="name" />name
              <input type="checkbox" name="description" />description
              <input type="checkbox" name="readme" />readme
            </div>
          </div> 
          <div className="top-filter-middle">
            <div className="top-filter-item">
              <label htmlFor="user-name">User name:</label>
              <input type="text" name="user-name" />
            </div>
            <div className="lang-topic">
              <div className="language top-filter-item">
                <label htmlFor="user-name">Language:</label>
                <input type="text" name="language" />
              </div>
              <div className="topic top-filter-item">
                <label htmlFor="topic">Topic:</label>
                <input type="text" name="topic" />
              </div>
            </div>
          </div>
          <div className="top-filter-bottom top-filter-item">
            <label htmlFor="organisation">Organisation:</label>
            <input type="text" name="organisation" />
          </div>
        </div>

        <div className="bottom-filter">
          <div className="bottom-filter-top">
            <div className="stars">
              <div className="stars-top">
                <p>Stars</p>
                <div className="radio-btns">
                  <div className="radio-btns-item">
                    <input type="radio" id="equal" name="stars" value="equal" />
                    <label htmlFor="equal">equal</label>
                  </div>
                  <div className="radio-btns-item">
                    <input type="radio" id="greater-than" name="stars" value="greater-than" />
                    <label htmlFor="greater-than">greater than</label>
                  </div>
                  <div className="radio-btns-item">
                    <input type="radio" id="less-than" name="stars" value="less-than" />
                    <label htmlFor="less-than">less than</label>
                  </div>
                  <div className="radio-btns-item">
                    <input type="radio" id="between" name="stars" value="between" />
                    <label htmlFor="between">between</label>
                  </div>
                </div>
              </div>
              <div className="stars-bottom">
                <label htmlFor="stars-num">Number:</label>
                <input type="number" name="stars-num" />
              </div>
            </div>
            <div className="created">
              <div className="created-top">
                <p>Created</p>
                <div className="radio-btns">
                  <div className="radio-btns-item">
                    <input type="radio" id="before" name="created" value="before" />
                    <label htmlFor="before">before</label>
                  </div>
                  <div className="radio-btns-item">
                    <input type="radio" id="on-or-before" name="created" value="on-or-before" />
                    <label htmlFor="on-or-before">on or before</label>
                  </div>
                  <div className="radio-btns-item">
                    <input type="radio" id="after" name="created" value="after" />
                    <label htmlFor="after">after</label>
                  </div>
                  <div className="radio-btns-item">
                    <input type="radio" id="on-or-after" name="created" value="on-or-after" />
                    <label htmlFor="on-or-after">on or after</label>
                  </div>
                  <div className="radio-btns-item">
                    <input type="radio" id="between" name="created" value="between" />
                    <label htmlFor="between">between</label>
                  </div>
                </div>
              </div>
              <div className="created-bottom">
                <label htmlFor="created-date">Date:</label>
                <input type="date" name="created-date" />
              </div>
            </div>
          </div>
          <div className="bottom-filter-bottom">
            <div className="size">
              <div className="size-top">
                <p>Size</p>
                <div className="radio-btns">
                  <div className="radio-btns-item">
                    <input type="radio" id="equal" name="size" value="equal" />
                    <label htmlFor="equal">equal</label>
                  </div>
                  <div className="radio-btns-item">
                    <input type="radio" id="greater-than" name="size" value="greater-than" />
                    <label htmlFor="greater-than">greater than</label>
                  </div>
                  <div className="radio-btns-item">
                    <input type="radio" id="less-than" name="size" value="less-than" />
                    <label htmlFor="less-than">less than</label>
                  </div>
                  <div className="radio-btns-item">
                    <input type="radio" id="between" name="size" value="between" />
                    <label htmlFor="between">between</label>
                  </div>
                </div>
              </div>
              <div className="size-bottom">
                <label htmlFor="number">Number:</label>
                <input type="number" name="size-num" />
              </div>
            </div>        
          </div>
        </div>   
        
        <div className={ advanced ? "search-reset advanced" : "search-reset"}>
          <button><FcSearch className="FcSearch"/></button>
          <button>Reset</button>
        </div>
        { advanced 
          ? <BiChevronsUp className="chevrons-icon" onClick={()=>setAdvanced(!advanced)} />
          : <BiChevronsDown className="chevrons-icon" onClick={()=>setAdvanced(!advanced)} />
        }
      </form>
    </section>
  )
}
