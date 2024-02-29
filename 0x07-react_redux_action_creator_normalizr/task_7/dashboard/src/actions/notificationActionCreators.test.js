import { NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe('Test for the markAsAread action', () => {
    it('should return { type: MARK_AS_READ, index: 1 } with 1 as an argument', () => {
        const action = {
            type: 'MARK_AS_READ',
            index: 1,
        };
        expect(markAsAread(1)).toEqual(action);
    });
});

describe('Test for the setNotificationFilter action', () => {
    it('should return { type: SET_TYPE_FILTER, filter: "DEFAULT" }', () => {
        const action = {
            type: 'SET_TYPE_FILTER',
            filter: 'DEFAULT',
        };
        expect(setNotificationFilter(NotificationTypeFilters["DEFAULT"])).toEqual(action);
    });
});