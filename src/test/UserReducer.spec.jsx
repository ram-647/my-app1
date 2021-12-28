import React from 'react';
import UserReducer from '../redux/actions/reducers/UserReducer'
import * as actions from '../redux/actions/action'

describe('Test UserReducer', () => {
    const props = {
        "data":[{"id":14,"name":"Chandrakin Achari","email":"achari_chandrakin@quigley-turner.name","gender":"female","status":"active"},
        {"id":1803,"name":"Tenali Ramakrishna","email":"tenali@ra.com","gender":"male","status":"active"},
        {"id":1804,"name":"Podma Marar","email":"macrar_padma@mueller.biz","gender":"male","status":"active"},{"id":2544,"name":"Allasani Peddana","email":"pruebas2@15ce.com","gender":"female","status":"active"},
        {"id":21,"name":"Aadidev Banerjee","email":"banerjee_aadidev@satterfield.name","gender":"male","status":"active"}]
        
    }
     const initialState = {
        users: [],
        loading: true,
        success: false,
        editSuccess: false
      };
    it('should return the initial state', () => {
        expect(UserReducer(undefined, {})).toEqual(initialState);
      });

      it('should test get users', () => {
        const action = { type: actions.GET_USERS, payload: props.data };
        const expectedState = { ...initialState, users: props.data };
        expect(UserReducer(undefined, action)).toEqual(expectedState);
      });

})

