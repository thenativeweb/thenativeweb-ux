import DialogsService from './DialogService';
import ExecutionEnvironmentService from './ExecutionEnvironmentService';
import getPortalRootNode from './getPortalRootNode';
import NotificationsService from './NotificationService';

const dialogs = new DialogsService();
const excecutionEnvironment = new ExecutionEnvironmentService();
const notifications = new NotificationsService();

export {
  dialogs,
  excecutionEnvironment,
  getPortalRootNode,
  notifications
};
