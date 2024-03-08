import uiReducer, { initialState } from "./uiReducer";
import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer } from '../actions/uiActionCreators';

describe('Tests for our simple reducer', () => {
    it('returns initial state when no action is passed', () => {
        const nextState = uiReducer(initialState, '');
        expect(nextState.toJS()).toEqual(initialState.toJS());
    });

    it('returns initial state when SELECT_COURSE action is passed', () => {
        const nextState = uiReducer(initialState, selectCourse());
        expect(nextState.toJS()).toEqual(initialState.toJS());
    });

    it('changes isNotificationDrawerVisible property correctly with DISPLAY_NOTIFICATION_DRAWER action', () => {
        const nextState = uiReducer(initialState, displayNotificationDrawer());
        expect(nextState.toJS().isNotificationDrawerVisible).toEqual(true);
    });
});