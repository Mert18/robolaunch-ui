import React from 'react';
import { Provider } from 'react-redux';

export const ReduxProvider = ({ children, store }: any) => (
  <Provider store={store}>{children}</Provider>
);
