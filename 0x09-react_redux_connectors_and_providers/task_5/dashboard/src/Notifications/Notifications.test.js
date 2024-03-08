import { shallow, mount } from 'enzyme';
import React from 'react';
import { Notifications } from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setLoadingState, setNotifications } from '../actions/notificationActionCreators';

describe('<Notifications />', () => {
    let listNotifications;
    let latestNotification;

    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
    afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('menu item is being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const item = wrapper.find('div#menuItem');
        expect(item).toHaveLength(1);
    });
    it('div.Notifications is not being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const item = wrapper.find('div#Notifications');
        expect(item).toHaveLength(0);
    });
    it('menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const item = wrapper.find('div#menuItem');
        expect(item).toHaveLength(1);
    });
    it('div.Notifications is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const item = wrapper.find('div#Notifications');
        expect(item).toHaveLength(1);
    });

    describe('Notifications without listNotifications or empty listNotifications', () => {
        beforeEach(() => {
            listNotifications = [];
        });

        it('Notifications renders Notification Item correct with empty listNotifications', () => {
            const wrapper = mount(<Notifications displayDrawer />);
            expect(wrapper.exists());
            wrapper.update();
            const listItems = wrapper.find('NotificationItem');
            expect(listItems).toHaveLength(1);

            expect(listItems.props().type).toEqual('noNotifications');
            expect(listItems.text()).toEqual('No new notification for now');
        });

        it('Notifications renders Notification Item correct without listNotifications', () => {
            const wrapper = mount(<Notifications displayDrawer />);
            wrapper.update();
            const listItems = wrapper.find('NotificationItem');
            expect(listItems).toHaveLength(1);

            expect(listItems.props().type).toEqual('noNotifications');
            expect(listItems.text()).toEqual('No new notification for now');
        });

        it('verify that clicking on the menu item calls handleDisplayDrawer', () => {
            const handleDisplayDrawer = jest.fn();
            const handleHideDrawer = jest.fn();

            const wrapper = shallow(
                <Notifications
                    handleDisplayDrawer={handleDisplayDrawer}
                    handleHideDrawer={handleHideDrawer}
                />
            );

            wrapper.find('#menuItem').simulate('click');

            expect(handleDisplayDrawer).toHaveBeenCalled();
            expect(handleHideDrawer).not.toHaveBeenCalled();

            jest.restoreAllMocks();
        });

        it('verify that clicking on the button calls handleHideDrawer', () => {
            const handleDisplayDrawer = jest.fn();
            const handleHideDrawer = jest.fn();

            const wrapper = shallow(
                <Notifications
                    displayDrawer
                    handleDisplayDrawer={handleDisplayDrawer}
                    handleHideDrawer={handleHideDrawer}
                />
            );

            wrapper.find('button').simulate('click');

            expect(handleDisplayDrawer).not.toHaveBeenCalled();
            expect(handleHideDrawer).toHaveBeenCalled();

            jest.restoreAllMocks();
        });

        it('verify that the function fetchNotifications is called when the component is mounted', () => {
            const fetchNotifications = jest.fn();
            const handleHideDrawer = jest.fn();

            const wrapper = shallow(
                <Notifications handleHideDrawer={handleHideDrawer} fetchNotifications={fetchNotifications} />
            );

            wrapper.instance().componentDidMount();
            expect(fetchNotifications).toHaveBeenCalled();

            jest.restoreAllMocks();
        });
    });
});