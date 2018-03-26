
const defaultState = {
  username: '',
  loggedIn: false,
  fetching: false,
  showSignUp: false,
  signUpFailure: false,
  signUpSuccess: false,
  showLogin: false,
  showLoginFailure: false,

}
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_SIGN_UP':
      return {
        ...state,
        showSignUp: true,
      }
    case 'CANCEL_SIGN_UP':
      return {
        ...state,
        showSignUp: false,
        signUpSuccess: false,
        signUpFailure: false,
      }
    case 'CREATE_ACCOUNT_SUCCESS':
      return {
        ...state,
        fetching: false,
        showSignUp: false,
        signUpSuccess: true,
        signUpFailure: false,
      }
    case 'CREATE_ACCOUNT_REQUEST':
      return {
        ...state,
        fetching: true,
      }
    case 'CREATE_ACCOUNT_FAILURE':
      return {
        ...state,
        fetching: false,
        showSignUp: false,
        signUpSuccess: false,
        signUpFailure: true,
      }
    case 'CLOSE_SIGN_UP_SUCCESS':
      return {
        ...state,
        signUpSuccess: false,
      }
    case 'CLOSE_SIGN_UP_FAILURE':
      return {
        ...state,
        signUpFailure: false,
      }

    ///////////////
    // LOGIN
    ///////////////

    case 'ON_SHOW_LOGIN':
      return {
        ...state,
        showLogin: true,
      }
    case 'ON_CANCEL_LOGIN':
      return {
        ...state,
        showLogin: false,
        showLoginFailure: false,
      }

    case 'LOGIN_SUCCESS':
      localStorage.setItem('JWT', action.response.json_token);
      localStorage.setItem('username', action.response.username);
      return {
        ...state,
        username: localStorage.getItem('username'),
        loggedIn: true,
        fetching: false,
        showLogin: false,
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        fetching: true,
        showLogin: false,
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        fetching: false,
        showLogin: false,
        showLoginFailure: true,
      }

    case 'LOGOUT':
      localStorage.setItem('JWT', '');
      localStorage.setItem('username', '');
      return {
        ...state,
        loggedIn: false,
        username: '',
      }

    case 'LOAD_USER_FROM_TOKEN':
      const username = localStorage.getItem('username');
      if (username) {
        return {
          ...state,
          username: username,
          loggedIn: true,
        }
      }

      break;
    default:
  }
  return state;
};
