import Footer from './Footer';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { AppContext } from '../App/AppContext';

describe('Footer component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render the text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });

    it('should not display link when the user is logged out', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: jest.fn() }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('a')).toHaveLength(0);
    });

    it('should display link when the user is logged in', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: true }, logOut: jest.fn() }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('a')).toHaveLength(1);
    });
});