import * as notificationData from '../../dist/notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
});

const normalized = normalize(notificationData, [notification]);

export function notificationsNormalizer(data) {
    return normalize(data, [notification]);
};

export default function getAllNotificationsByUser(userId) {
    const output = [];
    const notifications = normalized.entities.notifications;
    const messages = normalized.entities.messages;

    for (const id in notifications) {
        if (notifications[id].author === userId) {
            output.push(messages[notifications[id].context]);
        }
    }
    return output;
}

export { normalized };