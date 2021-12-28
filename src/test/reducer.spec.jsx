import React from 'react';
import  rootReducer  from '../redux/actions/reducers/reducer';
import { createStore } from 'redux';

describe('Root Reducer Suite', () => {

  let store = createStore(rootReducer)
  const initialState = {
    users: [],
    loading: true,
    success: false,
    editSuccess: false
  }

  it('loaded correctly', () => {
    expect(store.getState()).toEqual(initialState);
  });
});