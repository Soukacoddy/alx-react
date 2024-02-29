import * as notificationData from '../../../../notifications.json';

export default function getAllNotificationsByUser(userId) {
    return notificationData.filter(notification =>  notification.authorId === userId);
};