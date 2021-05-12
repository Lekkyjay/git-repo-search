import React, { useEffect, useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import { BiChevronsDown, BiChevronsUp } from 'react-icons/bi'
import { getRepos } from '../Redux/actions/repo.actions'
import SearchResults from './SearchResults'
import { useDispatch, useSelector } from 'react-redux'

export default function SearchFilter() {
  const [advanced, setAdvanced] = useState(false)
  
  const [formInputs, setFormInputs] = useState({})
  const [queryString, setQueryString] = useState('react+in:name+user:lekkyjay')
  const [filterParams, setFilterParams] = useState({})  
  const [createdBetween, setCreatedBetween] = useState(false)
  const [sizeBtw, setSizeBtw] = useState(false)
  const [err, setErr] = useState({searchBy: ''})
  const [submitted, setSubmitted] = useState(false)

  const [searchBy, setSearchBy] = useState('')
  const [inName, setInName] = useState({checked: false})
  const [inDescription, setInDescription] = useState({checked: false})
  const [inReadMe, setInReadMe] = useState({checked: false})
  const [userName, setUserName] = useState('')
  const [language, setLanguage] = useState('')
  const [topic, setTopic] = useState('')
  const [org, setOrg] = useState('')
  const [stars, setStars] = useState('')
  const [starsGt, setStarsGt] = useState({checked: false})
  const [starsLt, setStarsLt] = useState({checked: false})
  const [starsBtw, setStarsBtw] = useState(false)
  const [starsNum, setStarsNum] = useState('')
  const [starsNumBtw, setStarsNumBtw] = useState({ starsNum1: '', starsNum2: '' })
  const [starsBtw2, setStarsBtw2] = useState('')
  const [created, setCreated] = useState('')
  const [createdDate, setCreatedDate] = useState('')
  const [size, setSize] = useState('')
  const [sizeNum, setSizeNum] = useState('')
  const [sizeNumBtw, setSizeNumBtw] = useState({ minSizeNum: '', maxSizeNum: ''})

  const dispatch = useDispatch()
  const repoState = useSelector((state) => state)
  const { repos, loading } = repoState

  // useEffect(() => {
  //   dispatch(getRepos(queryString))
  // }, [])

  const handleSearchBy = (e) => {
    if (e.target.value.trim().length > 3) {
      setSearchBy(e.target.value)
      setQueryString(e.target.value)
    }
  }

  const handleInName = (e) => {
    // console.log('searchBy:', searchBy)
    // const value = e.target.checked
    console.log('value:', e.target.value)
    if (e.target.checked) {
      setInName({checked: true})
      setQueryString(queryString + '+' + e.target.value)
    }
    
    // (searchBy !== '') && setQueryString(str => str + 'in:' + value)    
  }
  const handleInDescription = (e) => {
    if (e.target.checked) {
      setInDescription({checked: true})
      setQueryString(queryString + '+' + e.target.value)
    }
  }

  const handleInReadMe = (e) => {
    if (e.target.checked) {
      setInReadMe({checked: true})
      setQueryString(queryString + '+' + e.target.value)
    }
  }

  const handleUserName = () => {}
  const handleLanguage = () => {}
  const handleTopic = () => {}
  const handleOrg = () => {}

  const handleStars = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    //run 4 checks to find selected radio button and setstate for selected radio btn
    setStars(e.target.value)
    if (e.target.value == 'between') {
      setStarsBtw(true)
    }
  }

  const handleStarsNum = (e) => {
    if (stars == '') {
      alert('Please first select one stars filter.')
      return
    }
    setStarsNum(e.target.value)
    if (stars == 'equal') {
      setQueryString(queryString + 'stars:' + starsNum)
    }
    if (stars == 'greater-than') {
      setQueryString(queryString + 'stars:>' + starsNum)
    }
    if (stars == 'less-than') {
      setQueryString(queryString + 'stars:<' + starsNum)
    }
  }

  const handleStarsNumBtw = (e) => {
    const { name, value } = e.target
    setStarsNumBtw({ ...starsNumBtw, [name]: value  })
  }

  const handleCreated = () => {}
  const handleCreatedDate = () => {}

  const handleSize = (e) => {
    setSize(e.target.value)
    if (e.target.value == 'between') {
      setSizeBtw(true)
    } else {
      setSizeBtw(false)
    }
  }

  const handleSizeNum = () => {}

  const handleSizeNumBtw = () => {}

  const submitHandler = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if (searchBy.trim().length < 3) {      
      setErr({searchBy: "Minimum 3 chars"})
      return
    }
    if (!advanced && (inName || inDescription || inReadMe)) {
      console.log('queryString:', queryString)
    } else if (advanced && (userName || language || topic || org || stars || size || created)) {
      console.log('queryString:', queryString)
    }
    else {
      console.log('simple or advanced mode failed')
    }
    // console.log('inName', inName)
    // console.log('length:', searchBy.trim().length)
    
    // dispatch(getRepos)
    // console.log('queryString:', queryString)
    // console.log('formFields:', formFields)
    console.log(err)
  }

  const handleReset = () => {
    setSearchBy('')
    setInName({checked: false})
    setInDescription({checked: false})
    setInReadMe({checked: false})
    setUserName('')
    setLanguage('')
    setTopic('')
    setOrg('')
    setStars('')
    setStarsNum('')
    setCreated('')
    setCreatedDate('')
    setErr({searchBy: ''})
  }

  const [formFields, setFormFields] = useState({
    searchBy: '', iname:'', description: '', readMe: '', userName: '',
    language: '', topic: '', organisation: '', stars: '', starsNum: '',
    starsNum1: '', starsNum2: '', created: '', createdDate: '', createdDate1: '',
    createdDate2: '', size: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({...formFields, [name]: value})
  }

  

  

  

  

  return (
    <>
      <section className={ advanced ? "filters container" : "filters container closed" }>
        <form onSubmit={submitHandler}>
          <div className="top-filter">
            <div className="top-filter-top">
              <div className="search-by top-filter-item">
                <label htmlFor="search-by">Search by:</label>
                <input type="text" name="search-by" onChange={handleSearchBy} value={searchBy} />
                {err.searchBy && searchBy.trim().length < 3 && <span className="error">{err.searchBy}</span>}
              </div>
              <div className="search-in">
                <label htmlFor="in">In:</label>
                <input type="checkbox" name="iname" onChange={handleInName} value="in:name" checked={inName.checked} />name
                <input type="checkbox" name="description" onChange={handleInDescription} value="in:description" checked={inDescription.checked} />description
                <input type="checkbox" name="readme" onChange={handleInReadMe} value="in:readMe" checked={inReadMe.checked} />readme
              </div>
            </div> 
            <div className="top-filter-middle">
              <div className="top-filter-item">
                <label htmlFor="userName">User name:</label>
                <input type="text" name="user-name" onChange={handleUserName} value={userName} />
              </div>
              <div className="lang-topic">
                <div className="language top-filter-item">
                  <label htmlFor="language">Language:</label>
                  <input type="text" name="language" onChange={handleLanguage} value={language} />
                </div>
                <div className="topic top-filter-item">
                  <label htmlFor="topic">Topic:</label>
                  <input type="text" name="topic" onChange={handleTopic} value={topic} />
                </div>
              </div>
            </div>
            <div className="top-filter-bottom top-filter-item">
              <label htmlFor="organisation">Organisation:</label>
              <input type="text" name="organisation" onChange={handleOrg} value={org} />
            </div>
          </div>

          <div className="bottom-filter">
            <div className="bottom-filter-top">
              <div className="stars">
                <div className="stars-top">
                  <p>Stars</p>
                  <div className="radio-btns">
                    <div className="radio-btns-item">
                      <input type="radio" name="stars" value="equal" checked={false} onChange={handleStars} />
                      <label htmlFor="equal">equal</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="stars" value="greater-than" checked={false} onChange={handleStars} />
                      <label htmlFor="greater-than">greater than</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="stars" value="less-than" checked={false} onChange={handleStars} />
                      <label htmlFor="less-than">less than</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="stars" value="between" checked={false} onChange={handleStars} />
                      <label htmlFor="between">between</label>
                    </div>
                  </div>
                </div>
                <div className="stars-bottom">
                  <label htmlFor="stars-num">Number:</label>
                  <input type="number" name="starsNum" onChange={handleStarsNum} value={starsNum} />
                </div>
              </div>
              <div className="created">
                <div className="created-top">
                  <p>Created</p>
                  <div className="radio-btns">
                    <div className="radio-btns-item">
                      <input type="radio" name="created" value="before" onChange={handleCreated} />
                      <label htmlFor="before">before</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="created" value="on-before" onChange={handleCreated} />
                      <label htmlFor="on-or-before">on or before</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="created" value="after" onChange={handleCreated} />
                      <label htmlFor="after">after</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="created" value="on-after" onChange={handleCreated} />
                      <label htmlFor="on-or-after">on or after</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="created" value="between" onChange={handleCreated} />
                      <label htmlFor="between">between</label>
                    </div>
                  </div>
                </div>
                <div className="created-bottom">
                  <label htmlFor="created-date">Date:</label>
                  <input type="date" name="created-date" onChange={handleCreatedDate} value={createdDate} />
                </div>
              </div>
            </div>
            <div className="bottom-filter-bottom">
              <div className="size">
                <div className="size-top">
                  <p>Size</p>
                  <div className="radio-btns">
                    <div className="radio-btns-item">
                      <input type="radio" name="size" value="equal" onChange={handleSize} />
                      <label htmlFor="equal">equal</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="size" value="greater-than" onChange={handleSize} />
                      <label htmlFor="greater-than">greater than</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="size" value="less-than" onChange={handleSize} />
                      <label htmlFor="less-than">less than</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="size" value="between" onChange={handleSize} />
                      <label htmlFor="between">between</label>
                    </div>
                  </div>
                </div>
                <div className="size-bottom">
                  {sizeBtw ? 
                    <div>
                      <label htmlFor="number">Min:</label>
                      <input type="number" name="minSize" onChange={handleSizeNumBtw} value={sizeNumBtw.minSizeNum} />
                      <label htmlFor="number">Max:</label>
                      <input type="number" name="Maxsize" onChange={handleSizeNumBtw} value={sizeNumBtw.maxSizeNum} />
                      <input type="range" name="sizeRange" id="price" onChange={handleSizeNumBtw} min={sizeNumBtw.minSizeNum} max={sizeNumBtw.maxSizeNum} />              
                    </div>  :
                    <div>
                      <label htmlFor="number">Number:</label>
                      <input type="number" name="sizeNum" onChange={handleSizeNum} value={sizeNum} />
                  </div>
                  }       
                </div>
              </div>        
            </div>
          </div>   
          
          <div className={ advanced ? "search-reset advanced" : "search-reset"}>
            <button><FcSearch className="FcSearch"/></button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
          { advanced 
            ? <BiChevronsUp className="chevrons-icon" onClick={()=>setAdvanced(!advanced)} />
            : <BiChevronsDown className="chevrons-icon" onClick={()=>setAdvanced(!advanced)} />
          }
        </form>      
      </section>
      {repos && <SearchResults repos={repos} loading={loading} /> }      
    </>
  )
}
