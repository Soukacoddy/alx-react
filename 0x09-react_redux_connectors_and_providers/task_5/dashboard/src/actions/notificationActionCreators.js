import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";

export function markAsAread(index) {
    return {
        type: MARK_AS_READ,
        index,
    };
};

export const boundMarkAsAread = (index) => dispatch(markAsAread(index));

export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
};

export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export function setLoadingState(loading) {
    return {
        type: SET_LOADING_STATE,
        loading,
    };
};

export function setNotifications(notifications) {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        notifications,
    };
};

export function fetchNotifications() {
    return (dispatch) => {
        dispatch(setLoadingState(true));
        return fetch('../../notifications.json')
                .then((res) => res.json())
                .then((data) => dispatch(setNotifications(data)))
                .catch((error) => {})
                .finally(dispatch(setLoadingState(false)));
    };
};