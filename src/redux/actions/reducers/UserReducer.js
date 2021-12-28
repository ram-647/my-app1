import { GET_USERS, DELETE_USER, EDIT_USER, GET_USERS_FAILURE } from "../action";

const INITIAL_STATE = {
  users: [],
  loading: true,
  success: false,
  editSuccess: false
};

export default (state = INITIAL_STATE, action) => {
  console.log("reducer", action.id);

  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    }
    case EDIT_USER: {
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.user.id ? action.user : user
        ),
        // user: action.user.data.data,
        editSuccess: true,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
        success:true,
      };
    }

    case GET_USERS_FAILURE: {
      return {
        ...state,
        showError: action.showError,
        loading:false
      };
    }
    default:
      return state;
  }
};
