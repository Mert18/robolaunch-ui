import { ReactChild, ReactChildren } from 'react';
import UserService from '../services/UserService';

interface AuxProps {
  children: ReactChild | ReactChildren;
}

function RenderOnAuthenticated({ children }: AuxProps) {
  return !UserService.isLoggedIn() ? children : null;
}

export default RenderOnAuthenticated;
