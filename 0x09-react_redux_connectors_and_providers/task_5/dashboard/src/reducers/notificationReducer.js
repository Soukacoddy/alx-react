import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from "../actions/notificationActionTypes";
import { Map, List } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialNotificationState = Map({
    notifications: List(),
    filter: 'DEFAULT',
    loading: false,
});

export default function notificationReducer(state = initialNotificationState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedData = notificationsNormalizer(action.data);

            Object.keys(normalizedData.notifications).map((key) => {
                normalizedData.notifications[key].isRead = false;
            });
            return state.mergeDeep(normalizedData);
        case MARK_AS_READ:
            const index = state.get('notifications').findIndex(notification => notification.get('id') === action.index);
            return state.setIn(['notifications', index, 'isRead'], true);
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        case SET_LOADING_STATE:
            return state.set("loading", action.loading);
        default:
            return state;
    }
}