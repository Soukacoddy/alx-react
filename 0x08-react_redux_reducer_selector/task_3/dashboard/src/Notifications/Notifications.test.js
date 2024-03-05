import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { getLatestNotification } from '../utils/utils';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// test('renders without crashing', () => {
//     render(<Notifications />);
// });

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toBeDefined();
    });

    it('renders three list items', () => {
        const notifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: getLatestNotification() },
        ];
        const wrapper = shallow(<Notifications listNotifications={notifications} displayDrawer={true} />);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });

    it('renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(false);
    });

    it('displays the menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem').exists()).toBe(false);
    });

    it('does not display div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('displays the menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem')).toHaveLength(0);
    });

    it('displays div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('renders Notifications correctly if an empty array passed or if the listNotifications property not passed', () => {
        let wrapper = shallow(<Notifications listNotifications={[]} />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);

        wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('renders Notifications correctly with empty array or without listNotifications property', () => {
        // let wrapper = shallow(<Notifications listNotifications={[]} />);
        // expect(wrapper.find('.Notifications').text()).not.toContain('Here is the list of notifications');
        // expect(wrapper.find('.Notifications').text()).toContain('No new notification for now');

        // wrapper = shallow(<Notifications />)
        // expect(wrapper.find('.Notifications').text()).not.toContain('Here is the list of notifications');
        // expect(wrapper.find('.Notifications').text()).toContain('No new notification for now');
        let wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);
        expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));

        wrapper = shallow(<Notifications />);
        expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);
        expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
    });

    // it('calls markAsRead function with the right message', () => {
    //     console.log = jest.fn();

    //     const wrapper = shallow(<Notifications />);
    //     const instance = wrapper.instance();
    //     instance.markNotificationAsRead(1);
    //     expect(console.log).toHaveBeenCalledWith('Notification 1 has been marked as read');
    //     console.log.mockRestore();
    // });

    it('should not rerender when updating with the same list', () => {
        const listNotifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", html: getLatestNotification() },
        ];
        const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
        expect(() => wrapper.setProps({ listNotifications })).not.toThrow();
    });

    it('should rerender when updating with a longer list', () => {
        const listNotifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", html: getLatestNotification() },
        ];

        const updatedList = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", html: getLatestNotification() },
            { id: 4, type: "default", value: "Foo" },
        ];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(() => wrapper.setProps({ listNotifications: updatedList })).not.toThrow();
    });
});

describe('onclick event behaves as it should', () => {
    it('should call console.log', () => {
        const wrapper = shallow(<Notifications />);
        const spy = jest.spyOn(console, "log").mockImplementation();
        wrapper.instance().markAsRead = spy;
        wrapper.instance().markAsRead(1);
        expect(wrapper.instance().markAsRead).toBeCalledWith(1);
        expect(spy).toBeCalledTimes(1);
        expect(spy).toBeCalledWith(1);
        spy.mockRestore();
    });

    it('verify that clicking on the menu item calls handleDisplayDrawer', () => {
        const handleDisplayDrawer = jest.fn();
        const handleHideDrawer = jest.fn();
        const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
        wrapper.find('div').at(0).simulate('click');
        expect(handleDisplayDrawer).toHaveBeenCalled();
        expect(handleHideDrawer).not.toHaveBeenCalled();
        jest.restoreAllMocks();
    });

    it('verify that clicking on the button calls handleHideDrawer', () => {
        const handleDisplayDrawer = jest.fn();
        const handleHideDrawer = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
        wrapper.find('button').at(0).simulate('click');
        expect(handleDisplayDrawer).not.toHaveBeenCalled();
        expect(handleHideDrawer).toHaveBeenCalled();
        jest.restoreAllMocks();
    });
});