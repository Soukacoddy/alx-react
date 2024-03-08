import uiReducer, { initialUiState } from "./uiReducer";
import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer } from '../actions/uiActionCreators';

describe('Tests for our simple reducer', () => {
    it('returns initial state when no action is passed', () => {
        const nextState = uiReducer(initialUiState, '');
        expect(nextState.toJS()).toEqual(initialUiState.toJS());
    });

    it('returns initial state when SELECT_COURSE action is passed', () => {
        const nextState = uiReducer(initialUiState, selectCourse());
        expect(nextState.toJS()).toEqual(initialUiState.toJS());
    });

    it('changes isNotificationDrawerVisible property correctly with DISPLAY_NOTIFICATION_DRAWER action', () => {
        const nextState = uiReducer(initialUiState, displayNotificationDrawer());
        expect(nextState.toJS().isNotificationDrawerVisible).toEqual(true);
    });
});