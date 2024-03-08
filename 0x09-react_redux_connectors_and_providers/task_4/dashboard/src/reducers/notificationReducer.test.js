import notificationReducer, { initialNotificationState } from "./notificationReducer";
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import { Map, List } from 'immutable';

describe('Tests for notificationReducer', () => {
    it('should return the initial state', () => {
        expect(notificationReducer(undefined, {})).toEqual(initialNotificationState);
    });

    it('should handle MARK_AS_READ', () => {
        const prevState = initialNotificationState.merge({
            notifications: List([
                Map({
                    id: 1,
                    type: "default",
                    value: "New course available",
                    isRead: false,
                }),
                Map({
                    id: 2,
                    type: "urgent",
                    value: "New resume available",
                    isRead: false,
                }),
            ]),
            filter: 'DEFAULT',
        });

        const action = {
            type: MARK_AS_READ,
            index: 2,
        };

        const expectedState = initialNotificationState.merge({
            notifications: List([
                Map({
                    id: 1,
                    type: "default",
                    value: "New course available",
                    isRead: false,
                }),
                Map({
                    id: 2,
                    type: "urgent",
                    value: "New resume available",
                    isRead: true,
                }),
            ]),
            filter: 'DEFAULT',
        });

        expect(notificationReducer(prevState, action)).toEqual(expectedState);
    });

    it('should handle SET_TYPE_FILTER', () => {
        const prevState = initialNotificationState.merge({
            notifications: List([
                Map({
                    id: 1,
                    type: "default",
                    value: "New course available",
                    isRead: false,
                }),
                Map({
                    id: 2,
                    type: "urgent",
                    value: "New resume available",
                    isRead: false,
                }),
            ]),
            filter: 'DEFAULT',
        });

        const action = {
            type: SET_TYPE_FILTER,
            filter: 'URGENT',
        };

        const expectedState = initialNotificationState.merge({
            notifications: List([
                Map({
                    id: 1,
                    type: "default",
                    value: "New course available",
                    isRead: false,
                }),
                Map({
                    id: 2,
                    type: "urgent",
                    value: "New resume available",
                    isRead: false,
                }),
            ]),
            filter: 'URGENT',
        });

        expect(notificationReducer(prevState, action)).toEqual(expectedState);
    });
});