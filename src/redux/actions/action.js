export const GET_USERS = "GET_USERS";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";

export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const getUsersAction = (payload) => {
  return {
    type: GET_USERS,
    users: payload,
  };
};

export const editUserAction = (payload) => {
  return {
    type: EDIT_USER,
    user: payload,
  };
};

export const deleteUserAction = (id, success) => {
  return {
    type: DELETE_USER,
    id: id,
    success: success
  };
};

export const getUsersFailure = (showError) => {
  return {
    type:GET_USERS_FAILURE,
    showError: showError,
  };
};





