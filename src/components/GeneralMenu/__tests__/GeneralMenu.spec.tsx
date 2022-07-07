import React from 'react';
import { render, screen } from '@testing-library/react';
import GeneralMenu from '../GeneralMenu';
import { MemoryRouter } from 'react-router';
import { ReduxProvider } from '../../../hoc/ReduxProvider';
import store from '../../../store/store';

it('renders the component and shows the General Menu text', () => {
  render(
    <ReduxProvider store={store}>
      <GeneralMenu />
    </ReduxProvider>,
    { wrapper: MemoryRouter }
  );
  const myElement = screen.getByText(/General Dashboard/i);
  expect(myElement).toBeInTheDocument();
});
