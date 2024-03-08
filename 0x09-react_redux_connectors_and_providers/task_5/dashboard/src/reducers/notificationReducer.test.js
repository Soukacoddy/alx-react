import notificationReducer, { initialNotificationState } from "./notificationReducer";
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from "../actions/notificationActionTypes";
import { Map, List, fromJS} from 'immutable';
import notificationsNormalizer from '../schema/notifications';

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

    it('Tests that SET_LOADING_STATE returns the data with the right item updated', function () {
		const initialState = {
			filter: 'DEFAULT',
			loading: false,
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: false,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};

		initialState.notifications = notificationsNormalizer(
			initialState.notifications
		).notifications;

		const action = {
			type: SET_LOADING_STATE,
			loading: true,
		};

		const data = [
			{
				id: 1,
				isRead: false,
				type: 'default',
				value: 'New course available',
			},
			{
				id: 2,
				type: 'urgent',
				isRead: false,
				value: 'New resume available',
			},
			{
				id: 3,
				type: 'urgent',
				isRead: false,
				value: 'New data available',
			},
		];

		const normalizedData = notificationsNormalizer(data);

		const expectedData = {
			filter: 'DEFAULT',
			loading: true,
			...normalizedData,
		};

		const state = notificationReducer(fromJS(initialState), action);

		expect(state.toJS()).toEqual(expectedData);
	});
});