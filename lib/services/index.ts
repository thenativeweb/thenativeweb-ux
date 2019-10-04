import DialogsService from './DialogService';
import ExecutionEnvironmentService from './ExecutionEnvironmentService';
import getPortalRootNode from './getPortalRootNode';
import NotificationsService from './NotificationService';

export default {
  dialogs: new DialogsService(),
  excecutionEnvironment: new ExecutionEnvironmentService(),
  getPortalRootNode,
  notifications: new NotificationsService()
};
