import Header from './Header';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('Header component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render img and h1 tags', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('should not render logoutSection with default context value', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('#logoutSection')).toHaveLength(0);
    });

    it('should render logoutSection with user-defined context (isLoggedIn=true)', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com'}, logOut: jest.fn() }}>
                <Header />
            </AppContext.Provider>
        );
        expect(wrapper.find('#logoutSection')).toHaveLength(1);
    });

    it('should call logOut spy when clicking on the logout link', () => {
        const logOutSpy = jest.fn();
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com'}, logOut: logOutSpy }}>
                <Header />
            </AppContext.Provider>
        );
        wrapper.find('a').simulate('click');
        expect(logOutSpy).toHaveBeenCalled();
    });
});