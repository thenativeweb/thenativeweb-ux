import DialogsService from './DialogService';
import getPortalRootNode from './getPortalRootNode';
import NotificationsService from './NotificationService';

export default {
  dialogs: new DialogsService(),
  getPortalRootNode,
  notifications: new NotificationsService()
};
