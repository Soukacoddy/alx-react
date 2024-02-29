import Login from './Login';
import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Login component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render 3 input and 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(3);
        expect(wrapper.find('label')).toHaveLength(2);
    });

    it('Submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        const submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.prop('disabled')).toBe(true);
    });

    it('Submit button is enabled after changing email and password', () => {
        const wrapper = shallow(<Login />);
        const emailInput = wrapper.find('input[type="email"]');
        const passwordInput = wrapper.find('input[type="password"]');
        const submitButton = wrapper.find('input[type="submit"]');
        emailInput.simulate('change', { target: { value: 'test@example.com' }});
        passwordInput.simulate('change', { target: { value: 'password123' }});
        expect(submitButton.prop('disabled')).toBe(true);
    });
});