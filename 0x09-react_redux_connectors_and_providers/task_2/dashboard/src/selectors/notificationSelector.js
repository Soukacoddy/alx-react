export const filterTypeSelected = (state) => state.notifications.filterTypeSelected;

export const getNotifications = (state) => state.notifications.notifications;

export const getUnreadNotifications = (state) =>
    state.notifications.notifications.filter((notification) => !notification.read);