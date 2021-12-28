import React from 'react';
import * as actions from '../redux/actions/action'
import  rootReducer  from '../redux/actions/reducers/reducer';
import { createStore, applyMiddleware } from "redux";

it("should set the root reducer", () => {
    const store = createStore(rootReducer);
    const initialState = {
        users: [],
        loading: true,
        success: false,
        editSuccess: false
      };
    store.dispatch({
      type: 'dummy',
    });
    expect(store.getState()).toEqual(initialState);
  });