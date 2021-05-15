import { 
  GET_REPOS_FAIL, 
  GET_REPOS_REQUEST, 
  GET_REPOS_SUCCESS, 
  SORT_REPOS_FAIL, 
  SORT_REPOS_REQUEST, 
  SORT_REPOS_SUCCESS 
} from "../actions/action.types";

const initialState = {
  repos: [],
  loading: false,
  qStr: '',
  error: null
}

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_REQUEST:
      return { 
        ...state,
        loading: true, 
        error: null
      }
    case GET_REPOS_SUCCESS:
      return { 
        ...state,
        loading: false, 
        repos: action.payload.repos,
        qStr:action.payload.qStr
      }
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        repos: [],
        error: action.payload
      }
      case SORT_REPOS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        }
      case SORT_REPOS_SUCCESS:
        return { 
          ...state,
          loading: false, 
          repos: action.payload.repos,
        }
      case SORT_REPOS_FAIL:
        return {
          ...state,
          loading: false,
          repos: [],
          error: action.payload
        }
    default:
      return state
  }
}
