import { GET_REPOS, REPO_LIST_REQUEST } from "./action.types"

export const getRepos = (qStr) => async (dispatch) => {
  dispatch({ type: REPO_LIST_REQUEST })
  const res = await fetch('https://api.github.com/search/repositories?q=' + qStr)
  const data = await res.json()

  dispatch({
    type: GET_REPOS,
    payload: data
  })
}