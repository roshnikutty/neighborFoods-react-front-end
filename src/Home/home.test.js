import React from 'react';
import { Home } from './Home';  //importing the unconnected component
import { shallow } from 'enzyme';

describe('<Home />', () => {
    it('should render without crashing', () => {
        shallow(<Home />)
    });
    it('login button hits call back on click', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Home gotoLogin={callback}/>);
        wrapper.find('button.login').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});
