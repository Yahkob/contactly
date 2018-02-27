import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ContactList from '../components/ContactList';
import MockData from '../contacts.json';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <ContactList list={MockData} />
      </MemoryRouter>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
