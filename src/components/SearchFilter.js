import React, { useEffect, useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import { BiChevronsDown, BiChevronsUp } from 'react-icons/bi'
import { getRepos } from '../Redux/actions/repo.actions'
import { useDispatch } from 'react-redux'
import { FaTimes } from 'react-icons/fa'

const Errors = ({errors, closeErrors}) => {
  return (
    <>
      {errors.map(e => (      
        <p key={e.name}>{e.name + ' ' + e.msg}</p>              
    ))}
    <FaTimes className="close-errors" onClick={closeErrors} />
    </>
  )
}

export default function SearchFilter() {
  const [advanced, setAdvanced] = useState(false)
  const [starsBtw, setStarsBtw] = useState(false)
  const [createdBtw, setCreatedBtw] = useState(false)
  const [sizeBtw, setSizeBtw] = useState(false)
  const [queryString, setQueryString] = useState('react+in:name+user:lekkyjay')  
  const [errs, setErrs] = useState([])
  const [showErrors, setShowErrors] = useState(false)

  const initialState = {
    searchBy: '', 
    inName: {checked: false, val: '+in:name'}, 
    inDesc: {checked: false, val: '+in:description'}, 
    inReadMe: {checked: false, val: '+in:readme'},
    userName: '', language: '', topic: '', org: '', 
    stars: '', starsNum: '', starsNumBtw: {minStar: '0', maxStar: '50'}, 
    created: '', createdDate: '', createdDateBtw: {fromDate: '', toDate: ''},
    size: '', sizeNum: '', sizeNumBtw: {minSize: '0', maxSize: '50'}
  }

  const [formFields, setFormFields] = useState(initialState)

  let tempErrs = []

  const dispatch = useDispatch()  

  useEffect(() => {
    dispatch(getRepos(queryString))
  }, [queryString])

  const handleCheckbox = (e) => {
    const { name, value } = e.target
    const tempfields = {...formFields}
    tempfields[name].checked = !tempfields[name].checked
    setFormFields(tempfields)
  }

  const handleTxt = (e) => {
    const { name, value } = e.target
    const tempfields = {...formFields}
    tempfields[name] = value
    setFormFields(tempfields)
  }

  const handleStars = (e) => {
    const { name, value } = e.target    
    const tempfields = {...formFields}
    tempfields[name] = value 
    setFormFields(tempfields)
    if (value === 'btw') {
      setStarsBtw(true)
    } else {
      setStarsBtw(false)
    }
  }  

  const handleStarsNum = (e) => {
    const { name, value } = e.target    
    const tempfields = {...formFields}
    tempfields[name] = value   
    setFormFields(tempfields)
  }

  const handleStarsNumBtw = (e) => {
    const { name, value } = e.target
    const tempfields = {...formFields}
    tempfields.starsNumBtw[name] = value  
    setFormFields(tempfields)
  }

  const handleCreated = (e) => {
    const { name, value } = e.target    
    const tempfields = {...formFields}
    tempfields[name] = value 
    setFormFields(tempfields)
    if (value === 'btw') {
      setCreatedBtw(true)
    } else {
      setCreatedBtw(false)
    }
  }

  const handleCreatedDate = (e) => {
    const { name, value } = e.target    
    const tempfields = {...formFields}
    tempfields.createdDateBtw.fromDate = ''
    tempfields.createdDateBtw.toDate = ''
    tempfields[name] = value   
    setFormFields(tempfields)
  }

  const handleCreatedBtw = (e) => {
    const { name, value } = e.target
    const tempfields = {...formFields}
    tempfields.createdDate = ''
    tempfields.createdDateBtw[name] = value  
    setFormFields(tempfields)
  }

  const handleSize = (e) => {
    const { name, value } = e.target    
    const tempfields = {...formFields}
    tempfields[name] = value   
    setFormFields(tempfields)
    if (value === 'btw') {
      setSizeBtw(true)
    } else {
      setSizeBtw(false)
    }
  }

  const handleSizeNum = (e) => {
    const { name, value } = e.target    
    const tempfields = {...formFields}
    tempfields[name] = value   
    setFormFields(tempfields)
  }

  const handleSizeNumBtw = (e) => {
    const { name, value } = e.target
    const tempfields = {...formFields}
    tempfields.sizeNumBtw[name] = value  
    setFormFields(tempfields)
  }   

  const validateFormFields = () => {
    if (formFields.searchBy.trim().length < 3) {
      const errMsg = {name: 'searchBy', msg: ' field must be minimum 3 characters'}
      tempErrs.push(errMsg)
      setErrs(tempErrs)
      console.log('searchBy error')
    }
    //simple mode
    if (!advanced && (
        !formFields.inName.checked && 
        !formFields.inDesc.checked && 
        !formFields.inReadMe.checked)
      ) {
        console.log('simple mode')
        const errMsg = {
          name: 'In checkbox:', 
          msg: ' please select atleast one of the checkboxes'
        }
        tempErrs.push(errMsg)
        setErrs(tempErrs)
    }
    //advanced mode 1
    if (advanced && (
          !formFields.inName.checked && 
          !formFields.inDesc.checked && 
          !formFields.inReadMe.checked)
        ) {
            console.log('advanced mode 1')
            const errMsg = {
              name: 'In checkbox:', 
              msg: ' please select atleast one of the checkboxes'
            }
            tempErrs.push(errMsg)
            setErrs(tempErrs)
        }
    //advanced mode 2
    if (advanced && (
      (formFields.userName !== '' && formFields.userName.length < 3) ||
      (formFields.language !== '' && formFields.language.length < 3) ||
      (formFields.topic !== '' && formFields.topic.length < 3) ||
      (formFields.org !== '' && formFields.org.length < 3)      
    )) {
      console.log('advanced mode 2')
      const errMsg = {
        name: 'Textfields:', 
        msg: '"UserName, Language, Topic or Organisation" must be min 3 chars when provided'
      }
      tempErrs.push(errMsg)
      setErrs(tempErrs)
      console.log('errs:', errs)
      console.log('tempErrs:', tempErrs)
    }
    // if (tempErrs.length !== 0) {
    //   setShowErrors(true)
    // }
  }

  const generateQueryString = (fields) => {
    let qStr = ''
    qStr = formFields.searchBy
    Object.keys(formFields).map(key => {
      if (key === 'inName') {
        qStr += formFields[key].checked ? formFields[key].val : ''
      }
      if (key === 'inDesc') {
        qStr += formFields[key].checked ? formFields[key].val : ''
      }
      if (key === 'inReadMe') {
        qStr += formFields[key].checked ? formFields[key].val : ''
      }
      if (key === 'userName') {
        qStr += formFields[key] !== '' ? '+user:' + formFields[key] : ''
      }
      if (key === 'language') {
        qStr += formFields[key] !== '' ? '+language:' + formFields[key] : ''
      }
      if (key === 'stars') {
        qStr += formFields[key] === 'eq' ? '+stars:' + formFields.starsNum : ''
        qStr += formFields[key] === 'lt' ? '+stars:<' + formFields.starsNum : ''
        qStr += formFields[key] === 'gt' ? '+stars:>' + formFields.starsNum : ''
        qStr += formFields[key] === 'btw' ? 
          '+stars:>' + formFields.starsNumBtw.minStar + formFields.starsNumBtw.maxStar : ''
      }
      if (key === 'created') {
        qStr += formFields[key] === 'bf' ? '+created:<' + formFields.createdDate : ''
        qStr += formFields[key] === 'o-o-b' ? '+created:<=' + formFields.createdDate : ''
        qStr += formFields[key] === 'af' ? '+created:>' + formFields.createdDate : ''
        qStr += formFields[key] === 'o-o-a' ? '+created:>=' + formFields.createdDate : ''
        qStr += formFields[key] === 'btw' ? 
          '+created:>' + formFields.createdDateBtw.fromDate + formFields.createdDateBtw.toDate : ''
      }
      if (key === 'size') {
        qStr += formFields[key] === 'eq' ? '+stars:' + formFields.sizeNum : ''
        qStr += formFields[key] === 'lt' ? '+stars:<' + formFields.sizeNum : ''
        qStr += formFields[key] === 'gt' ? '+stars:>' + formFields.sizeNum : ''
        qStr += formFields[key] === 'btw' ? 
          '+size:>' + formFields.sizeNumBtw.minSize + formFields.sizeNumBtw.maxSize : ''
      }       
      return qStr 
    })
    setQueryString(qStr)
    console.log('qStr:', qStr)
  }

  const handleReset = () => {}

  const handleSubmit = (e) => {
    e.preventDefault()

    tempErrs = []
    validateFormFields()
    if (tempErrs.length !== 0) {
      setShowErrors(true)
      return
    }

    // if (errs.length !== 0) {
    //   setShowErrors(true)
    //   return
    // }
    
    generateQueryString(formFields)
  }

  const closeErrors = () => {
    setShowErrors(false)
  }
  

  return (
    <>
    {/* {errs.length > 0 ? errs[0].name + errs[0].msg : ''} */}
      <section className={ advanced ? "filters container" : "filters container closed" }>
        <div className={showErrors ? "errors show-errors" : "errors"}>
          {errs.length > 0 && <Errors errors={errs} closeErrors={closeErrors} />}
        </div>
        <form onSubmit={handleSubmit} className="search-filter-form">
          <div className="top-filter">
            <div className="top-filter-top">
              <div className="search-by top-filter-item">
                <label htmlFor="search-by">Search by:</label>
                <input type="text" name="searchBy" onChange={handleTxt} value={formFields.searchBy} />
                {errs.length > 0 && <span>hello</span>}
              </div>
              <div className="search-in">
                <label htmlFor="in">In:</label>
                <input type="checkbox" name="inName" onChange={handleCheckbox} value="+in:name" checked={formFields.inName.checked} />name
                <input type="checkbox" name="inDesc" onChange={handleCheckbox} value="+in:description" checked={formFields.inDesc.checked} />description
                <input type="checkbox" name="inReadMe" onChange={handleCheckbox} value="+in:readMe" checked={formFields.inReadMe.checked} />readme
              </div>
            </div> 
            <div className="top-filter-middle">
              <div className="user-name top-filter-item">
                <label htmlFor="userName">User name:</label>
                <input type="text" name="userName" onChange={handleTxt} value={formFields.userName} />
                {errs.length > 0 && <span>hello</span>}
              </div>
              <div className="lang-topic">
                <div className="language top-filter-item">
                  <label htmlFor="language">Language:</label>
                  <input type="text" name="language" onChange={handleTxt} value={formFields.language} />
                  {errs.length > 0 && <span>hello</span>}
                </div>
                <div className="topic top-filter-item">
                  <label htmlFor="topic">Topic:</label>
                  <input type="text" name="topic" onChange={handleTxt} value={formFields.topic} />
                  {errs.length > 0 && <span>hello</span>}
                </div>
              </div>
            </div>
            <div className="org top-filter-bottom top-filter-item">
              <label htmlFor="organisation">Organisation:</label>
              <input type="text" name="org" onChange={handleTxt} value={formFields.org} />
              {errs.length > 0 && <span>hello</span>}
            </div>            
          </div>

          <div className="bottom-filter">
            <div className="bottom-filter-top">
              <div className="stars">
                <div className="stars-top">
                  <p>Stars</p>
                  <div className="radio-btns">
                    <div className="radio-btns-item">
                      <input type="radio" name="stars" value="eq" onChange={handleStars} />
                      <label htmlFor="equal">equal</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="stars" value="gt" onChange={handleStars} />
                      <label htmlFor="greater-than">greater than</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="stars" value="lt" onChange={handleStars} />
                      <label htmlFor="less-than">less than</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="stars" value="btw" onChange={handleStars} />
                      <label htmlFor="between">between</label>
                    </div>
                  </div>
                </div>
                <div className="stars-bottom">
                  {starsBtw ? 
                      <div className="range">
                        <label htmlFor="number">Min:</label>
                        <input type="number" name="minStar" onChange={handleStarsNumBtw} value={formFields.starsNumBtw.minStar} />
                        <label htmlFor="number">Max:</label>
                        <input type="number" name="maxStar" onChange={handleStarsNumBtw} value={formFields.starsNumBtw.maxStar} />
                        <span>{formFields.starsNumBtw.minStar}</span>
                        <input type="range" name="starRange" onChange={handleStarsNumBtw} min={formFields.starsNumBtw.minStar} max={formFields.starsNumBtw.maxStar} />              
                        <span>{formFields.starsNumBtw.maxStar}</span>
                      </div>  :
                      <div>
                        <label htmlFor="stars-num">Number:</label>
                        <input type="number" name="starsNum" onChange={handleStarsNum} value={formFields.starsNum} />
                      </div>
                  }   
                </div>
              </div>
              <div className="created">
                <div className="created-top">
                  <p>Created</p>
                  <div className="radio-btns">
                    <div className="radio-btns-item">
                      <input type="radio" name="created" value="bf" onChange={handleCreated} />
                      <label htmlFor="before">before</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="created" value="o-o-b" onChange={handleCreated} />
                      <label htmlFor="on-or-before">on or before</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="created" value="af" onChange={handleCreated} />
                      <label htmlFor="after">after</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="created" value="o-o-a" onChange={handleCreated} />
                      <label htmlFor="on-or-after">on or after</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="created" value="btw" onChange={handleCreated} />
                      <label htmlFor="between">between</label>
                    </div>
                  </div>
                </div>
                <div className="created-bottom">
                  {createdBtw ? 
                        <div className="range">
                          <label htmlFor="number">From:</label>
                          <input type="date" name="fromDate" onChange={handleCreatedBtw} value={formFields.createdDateBtw.minDate} />
                          <label htmlFor="number">To:</label>
                          <input type="date" name="toDate" onChange={handleCreatedBtw} value={formFields.createdDateBtw.maxDate} />
                        </div>  :
                        <div>
                          <label htmlFor="created-date">Date:</label>
                          <input type="date" name="createdDate" onChange={handleCreatedDate} value={formFields.createdDate} />
                        </div>
                    }  
                </div>
              </div>
            </div>
            <div className="bottom-filter-bottom">
              <div className="size">
                <div className="size-top">
                  <p>Size</p>
                  <div className="radio-btns">
                    <div className="radio-btns-item">
                      <input type="radio" name="size" value="eq" onChange={handleSize} />
                      <label htmlFor="equal">equal</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="size" value="gt" onChange={handleSize} />
                      <label htmlFor="greater-than">greater than</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="size" value="lt" onChange={handleSize} />
                      <label htmlFor="less-than">less than</label>
                    </div>
                    <div className="radio-btns-item">
                      <input type="radio" name="size" value="btw" onChange={handleSize} />
                      <label htmlFor="between">between</label>
                    </div>
                  </div>
                </div>
                <div className="size-bottom">
                  {sizeBtw ? 
                    <div className="range">
                      <label htmlFor="number">Min:</label>
                      <input type="number" name="minSize" onChange={handleSizeNumBtw} value={formFields.sizeNumBtw.minSize} />
                      <label htmlFor="number">Max:</label>
                      <input type="number" name="maxSize" onChange={handleSizeNumBtw} value={formFields.sizeNumBtw.maxSize} />
                      <span>{formFields.sizeNumBtw.minSize}</span>
                      <input type="range" name="sizeRange" onChange={handleSizeNumBtw} min={formFields.sizeNumBtw.minSize} max={formFields.sizeNumBtw.maxSize} />              
                      <span>{formFields.sizeNumBtw.maxSize}</span>
                    </div>  :
                    <div>
                      <label htmlFor="number">Number:</label>
                      <input type="number" name="sizeNum" onChange={handleSizeNum} value={formFields.sizeNum} />
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
    </>
  )
}
