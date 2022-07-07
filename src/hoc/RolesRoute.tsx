/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import UserService from '../services/UserService';

const RolesRoute = ({ groups, children }: any) => {
  const isAuthenticated = UserService.hasGroup(groups);
  return isAuthenticated ? children : 'you are not authenticated';
};

export default RolesRoute;
