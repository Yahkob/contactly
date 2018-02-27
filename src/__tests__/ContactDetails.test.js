import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ContactDetails from '../components/ContactDetails';
import renderer from 'react-test-renderer';
import MockData from '../contacts.json';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <ContactDetails contact={MockData[0]} />
      </MemoryRouter>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
