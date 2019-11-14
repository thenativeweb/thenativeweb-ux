import { DialogService } from './DialogService';
import { ExecutionEnvironmentService } from './ExecutionEnvironmentService';
import { getPortalRootNode } from './getPortalRootNode';
import { NotificationService } from './NotificationService';

const dialogs = new DialogService();
const excecutionEnvironment = new ExecutionEnvironmentService();
const notifications = new NotificationService();

export {
  dialogs,
  excecutionEnvironment,
  getPortalRootNode,
  notifications
};
