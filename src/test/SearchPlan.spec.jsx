import React from 'react';
import {Provider} from 'react-redux'
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import SearchPlan from '../components/SearchPlan';

describe('Test SearchPlan component', () => {
   

    const props = {
        "data": [
            { "id": 1233, "name": "Jaya Somayaji", "email": "jaya_somayaji@kautzer.info", "gender": "male", "status": "inactive" },
            { "id": 20313, "name": "API Monitoring:pvy7ge", "email": "apimonitoringpvy7ge@synthetic.com", "gender": "male", "status": "active" },
            { "id": 1235, "name": "Fr. Ghanaanand Jain", "email": "jain_fr_ghanaanand@koss.name", "gender": "female", "status": "active" },
        ]
    }
    const mockStore = configureMockStore();
const store = mockStore({Users:props.data, loading:false});

    it('Should render SearchPlan component', () => {
        const wrapper = shallow(<Provider store={store}><SearchPlan  /></Provider>)
        expect(wrapper).toBeDefined()
    })
    
})