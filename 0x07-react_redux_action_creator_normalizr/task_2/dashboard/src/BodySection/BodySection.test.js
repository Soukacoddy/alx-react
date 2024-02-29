import React from 'react';
import { shallow } from 'enzyme';
import Bodysection from './BodySection';

describe('<Bodysection />', () => {
    it('renders the children and one h2 element correctly', () => {
        const wrapper = shallow(
            <Bodysection title='test title'>
                <p>test children node</p>
            </Bodysection>
        );
        expect(wrapper.find("h2").html()).toEqual("<h2>test title</h2>");
        expect(wrapper.contains(<p>test children node</p>)).toBe(true);
    });
});