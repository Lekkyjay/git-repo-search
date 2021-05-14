import { 
  GET_REPOS_FAIL, 
  GET_REPOS_REQUEST, 
  GET_REPOS_SUCCESS, 
  SORT_REPOS_REQUEST,
  SORT_REPOS_SUCCESS 
} from "./action.types"

export const getRepos = (qStr) => async (dispatch) => {
  dispatch({ type: GET_REPOS_REQUEST })
  try {
    const res = await fetch('https://api.github.com/search/repositories?q=' + qStr)
    const data = await res.json()
    const repos = data.items.slice(0, 10)

    dispatch({
      type: GET_REPOS_SUCCESS,
      payload: {repos, qStr}
    })
  } catch (error) {
        dispatch({
          type: GET_REPOS_FAIL,
          payload: {errMsg: 'Something went wrong. Please try again later'}
        })
  }
}

export const sortRepos = (sortStr) => async (dispatch, getState) => {
  const qStr = getState().qStr
  console.log('qStr from sort repos:', qStr)
  console.log('sortStr from sort repos:', sortStr)
  dispatch({ type: SORT_REPOS_REQUEST })
  try {
    const res = await fetch('https://api.github.com/search/repositories?q=' + qStr + sortStr)
    const data = await res.json()
    const repos = data.items.slice(0, 10)

    dispatch({
      type: SORT_REPOS_SUCCESS,
      payload: {repos}
    })
  } catch (error) {
        dispatch({
          type: GET_REPOS_FAIL,
          payload: {errMsg: 'Something went wrong. Please try again later'}
        })
  }
}