import uiReducer from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/uiActionTypes";

describe('Tests for our simple reducer', () => {
    it('returns initial state when no action is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        const nextState = uiReducer(initialState, {});
        expect(nextState).toEqual(initialState);
    });

    it('returns initial state when SELECT_COURSE action is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        const nextState = uiReducer(initialState, { type: 'SELECT_COURSE' });
        expect(nextState).toEqual(initialState);
    });

    it('changes isNotificationDrawerVisible property correctly with DISPLAY_NOTIFICATION_DRAWER action', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        const nextState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(nextState.isNotificationDrawerVisible).toBe(true);
    });
});