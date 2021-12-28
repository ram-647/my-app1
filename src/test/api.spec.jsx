import React from 'react';
import axios from "axios";
import { getUsers, editUser, deleteUser } from "../redux/actions/apis/api";

describe('test api calls', () => {
    jest.mock('axios');
    
    it('Should test getUsers api call success', async() => {
       // axios.get = jest.fn()
        const url = "https://gorest.co.in/public-api/users"
        jest.mock("axios");

        const payload =  {
            "data":[{"id":14,"name":"Chandrakin Achari","email":"achari_chandrakin@quigley-turner.name","gender":"female","status":"active"},
            {"id":1803,"name":"Tenali Ramakrishna","email":"tenali@ra.com","gender":"male","status":"active"},
            {"id":1804,"name":"Podma Marar","email":"macrar_padma@mueller.biz","gender":"male","status":"active"},{"id":2544,"name":"Allasani Peddana","email":"pruebas2@15ce.com","gender":"female","status":"active"},
            {"id":21,"name":"Aadidev Banerjee","email":"banerjee_aadidev@satterfield.name","gender":"male","status":"active"}]
            
        }

    axios.get().mockImplementationOnce(() => Promise.resolve(payload));
       // await expect(getUsers()).resolves.toEqual(payload);
    expect(axios.get()).toHaveBeenCalledTimes(1)

    })
})