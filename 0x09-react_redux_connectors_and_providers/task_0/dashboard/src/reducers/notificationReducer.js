import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import { Map, List } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
    notifications: List(),
    filter: 'DEFAULT',
});

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedData = notificationsNormalizer(action.data);
            return state.merge({
                notifications: List(normalizedData.map(notification => Map({ ...notification, isRead: false }))),
            });
        case MARK_AS_READ:
            const index = state.get('notifications').findIndex(notification => notification.get('id') === action.index);
            return state.setIn(['notifications', index, 'isRead'], true);
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        default:
            return state;
    }
}