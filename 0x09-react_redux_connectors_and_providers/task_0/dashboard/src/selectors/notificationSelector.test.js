import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";

const createTestState = (overrides = {}) => ({
    notifications: {
        filterTypeSelected: 'all',
        notifications: [
            { id: 1, message: 'Notification 1', read: false},
            { id: 2, message: 'Notification 2', read: true},
        ],
        ...overrides,
    },
});

describe('Tests for filterTypeSelected selector', () => {
    it('should work as expected', () => {
        const state = createTestState({ filterTypeSelected: 'unread' });
        expect(filterTypeSelected(state)).toBe('unread');
    });
});

describe('Tests for getNotifications selector', () => {
    it('should return a list of the message entities within the reducer', () => {
        const state = createTestState();
        expect(getNotifications(state)).toEqual([
            { id: 1, message: 'Notification 1', read: false},
            { id: 2, message: 'Notification 2', read: true},
        ]);
    });
});

describe('Tests for getUnreadNotifications selector', () => {
    it('should return a list of the message entities within the reducer', () => {
        const state = createTestState();
        expect(getUnreadNotifications(state)).toEqual([{ id: 1, message: 'Notification 1', read: false }]);
    });
});