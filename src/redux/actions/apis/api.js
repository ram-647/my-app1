import axios from "axios";
import {
  getUsersAction,
  editUserAction,
  deleteUserAction,
  getUsersFailure,
} from "../action";

export const getUsers = () => {
  console.log("GetUsers");

  return (dispatch, getState) => {
    console.log("GetUsers dispatch");

    axios
      .get(`https://gorest.co.in/public-api/users`)
      .then((res) => {
        const response = res.data.data;
        dispatch(getUsersAction(response));
      })
      .catch((error) => {
        dispatch(getUsersFailure(true));
      });
  };
};

export const editUser = (id, user) => (dispatch, getState) => {
  console.log("editUser", id, user);
  const url = `https://gorest.co.in/public-api/users/${id}`;
  const token =
    "9e99287bdd6384a489f60afe7af98550160f0e8cdfd45eb44dc665282be30b27";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  axios
    .put(url, user, { headers })
    .then((res) => res.data.data)
    .then((response) => dispatch(editUserAction(response)));
};

export const deleteUser = (id) => (dispatch, getState) => {
  console.log("deleteUser", id);
  const token =
    "9e99287bdd6384a489f60afe7af98550160f0e8cdfd45eb44dc665282be30b27";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  axios
    .delete(`https://gorest.co.in/public-api/users/${id}`, { headers })
    .then((res) => res)
    .then((response) => dispatch(deleteUserAction(id)
    ));
};
