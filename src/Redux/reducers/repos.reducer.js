import { GET_REPOS, REPO_LIST_REQUEST } from "../actions/action.types";

export const reposReducer = (state = { repos: [] }, action) => {
  switch (action.type) {
    case REPO_LIST_REQUEST:
      return { loading: true, repos: []}
    case GET_REPOS:
      return { loading: false, repos: action.payload }
    default:
      return state
  }
}
