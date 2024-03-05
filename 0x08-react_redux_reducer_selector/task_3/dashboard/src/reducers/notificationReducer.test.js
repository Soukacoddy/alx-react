import notificationReducer, { initialState } from "./notificationReducer";
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";

describe('Tests for notificationReducer', () => {
    it('should return the initial state', () => {
        expect(notificationReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                {
                    id: 1,
                    type: "default",
                    value: "New course available",
                },
                {
                    id: 2,
                    type: "urgent",
                    value: "New resume available",
                },
            ],
        };

        const expectedState = {
            notifications: [
                {
                    id: 1,
                    type: "default",
                    value: "New course available",
                    isRead: false,
                },
                {
                    id: 2,
                    type: "urgent",
                    value: "New resume available",
                    isRead: false,
                },
            ],
            filter: 'DEFAULT',
        };

        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle MARK_AS_READ', () => {
        const prevState = {
            notifications: [
                {
                    id: 1,
                    type: "default",
                    value: "New course available",
                    isRead: false,
                },
                {
                    id: 2,
                    type: "urgent",
                    value: "New resume available",
                    isRead: false,
                },
            ],
            filter: 'DEFAULT',
        };

        const action = {
            type: MARK_AS_READ,
            index: 2,
        };

        const expectedState = {
            notifications: [
                {
                    id: 1,
                    type: "default",
                    value: "New course available",
                    isRead: false,
                },
                {
                    id: 2,
                    type: "urgent",
                    value: "New resume available",
                    isRead: true,
                },
            ],
            filter: 'DEFAULT',
        };

        expect(notificationReducer(prevState, action)).toEqual(expectedState);
    });

    it('should handle SET_TYPE_FILTER', () => {
        const prevState = {
            notifications: [
                {
                    id: 1,
                    type: "default",
                    value: "New course available",
                    isRead: false,
                },
                {
                    id: 2,
                    type: "urgent",
                    value: "New resume available",
                    isRead: false,
                },
            ],
            filter: 'DEFAULT',
        };

        const action = {
            type: SET_TYPE_FILTER,
            filter: 'URGENT',
        };

        const expectedState = {
            notifications: [
                {
                    id: 1,
                    type: "default",
                    value: "New course available",
                    isRead: false,
                },
                {
                    id: 2,
                    type: "urgent",
                    value: "New resume available",
                    isRead: false,
                },
            ],
            filter: 'URGENT',
        };

        expect(notificationReducer(prevState, action)).toEqual(expectedState);
    });
});