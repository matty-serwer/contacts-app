import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('expects addContactButton to be in App component', () => {
  const { queryByTestId } = render(<App />);
  const addContactButton = queryByTestId("add-contact-button")
  expect(addContactButton).toBeInTheDocument();
});

test('expects Drawer component not to be in App Component on render', () => {
  const { queryByTestId } = render(<App />);
  const addContactDrawer = queryByTestId("add-contact-drawer")
  expect(addContactDrawer).not.toBeInTheDocument();
});

test('expects Drawer component to be in App component on add click', () => {
  const { queryByTestId } = render(<App />);
  const addContactButton = queryByTestId("add-contact-button")
  fireEvent.click(addContactButton)
  const addContactDrawer = queryByTestId("add-contact-drawer")
  expect(addContactDrawer).toBeInTheDocument();
});