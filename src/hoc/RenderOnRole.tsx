import { ReactChildren, ReactChild } from 'react';
import UserService from '../services/UserService';

interface AuxProps {
  groups: string[];
  children: ReactChild | ReactChildren;
}

function RenderOnRole({ groups, children }: AuxProps) {
  return UserService.hasGroup(groups) ? children : null;
}

export default RenderOnRole;
