import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('NotificationItem component', () => {
    it('should render without crashing', () => {
        shallow(<NotificationItem />);
    });

    it('should render correct html from type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.html()).toEqual('<li class=\"default_ael1mo\" data-notification-type=\"default\">test</li>');
    });

    it('should render correct html from html="<u>test</u>" props', () => {
        const wrapper = shallow(<NotificationItem html="<u>test</u>" />);
        expect(wrapper.html()).toEqual('<li class=\"default_ael1mo\" data-notification-type=\"default\"><u>test</u></li>');
    });

    it('should render the right html', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.find('li').at(0).html()).toEqual('<li class=\"default_ael1mo\" data-notification-type=\"default\"></li>');
    });

    it('calls markAsRead with the right id argument on click', () => {
        const mockMarkAsRead = jest.fn();
        const wrapper = shallow(<NotificationItem markAsRead={mockMarkAsRead} id={1} />);
        wrapper.find('li').simulate('click');
        expect(mockMarkAsRead).toHaveBeenCalledWith(1);
    });
});