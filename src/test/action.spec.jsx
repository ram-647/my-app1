import React from 'react'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import fetchMock from 'fetch-mock'
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import * as actions from '../redux/actions/action'

describe('Test actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
    const props = {
        "data":[{"id":14,"name":"Chandrakin Achari","email":"achari_chandrakin@quigley-turner.name","gender":"female","status":"active"},
        {"id":1803,"name":"Tenali Ramakrishna","email":"tenali@ra.com","gender":"male","status":"active"},
        {"id":1804,"name":"Podma Marar","email":"macrar_padma@mueller.biz","gender":"male","status":"active"},{"id":2544,"name":"Allasani Peddana","email":"pruebas2@15ce.com","gender":"female","status":"active"},
        {"id":21,"name":"Aadidev Banerjee","email":"banerjee_aadidev@satterfield.name","gender":"male","status":"active"}]
        
    }
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
const store = mockStore({Users:props.data, loading:false});

it('Dispatches the correct action and payload',  () => {
    //  const mock = new MockAdapter(axios);
    // mock.onGet('http://127.0.0.1:7000/news').reply(200, newsData);

    //jest.setTimeout(100000);
      const expectedActions = [
        actions.getUsersAction(
            {
              payload: props.data,
              type: actions.GET_USERS,
            },
          ),
        actions.editUserAction({
            type: actions.EDIT_USER,
            user:  props.data[0],
        }),
        actions.deleteUserAction({
            type: actions.DELETE_USER,
            id:  props.data[0].id,
            success: true
        }),
        actions.deleteUserAction({
            type: actions.DELETE_USER,
            id:  props.data[0].id,
            success: true
        }),
        actions.getUsersFailure({
            type: actions.GET_USERS_FAILURE,
            showError: true,
        })

      ];
      
      const initialState = { payload: [], type: null };
    const store = mockStore(initialState);
      // store.dispatch(actions.getUsersAction(props.data));
      // expect(store.getActions()).toEqual(expectedActions);
      return store.dispatch(actions.getUsersAction(props.data)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    
    });
  });