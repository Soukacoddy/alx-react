import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe('Test for the actions', () => {
    it('should return { type: LOGIN, user : { email, password } }', () => {
        const action = {
            type: 'LOGIN',
            user: {
                email: 1,
                password: 2,
            },
        };
        expect(login(1, 2)).toEqual(action);
    });
    it('should return { type: LOGOUT }', () => {
        const action = {
            type: 'LOGOUT',
        };
        expect(logout()).toEqual(action);
    });
    it('should return { type: DISPLAY_NOTIFICATION_DRAWER }', () => {
        const action = {
            type: 'DISPLAY_NOTIFICATION_DRAWER',
        };
        expect(displayNotificationDrawer()).toEqual(action);
    });
    it('should return { type: HIDE_NOTIFICATION_DRAWER }', () => {
        const action = {
            type: 'HIDE_NOTIFICATION_DRAWER',
        };
        expect(hideNotificationDrawer()).toEqual(action);
    });
});