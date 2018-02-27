import React from 'react';
import ContactDetails from '../components/ContactDetails.js';
import renderer from 'react-test-renderer';
import MockData from '../contacts.json';
import { MemoryRouter } from "react-router-dom";

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <ContactDetails contact={MockData[0]} />
      </MemoryRouter>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
