import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("<BodySectionWithMarginBottom />", () => {
    it('renders correctly a BodySection compnent', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title='test title'/>);
        expect(wrapper.find(BodySection)).toHaveLength(1);
        expect(wrapper.find(BodySection).html()).toEqual('<div class=\"bodySection\"><h2>test title</h2></div>')
    });
})