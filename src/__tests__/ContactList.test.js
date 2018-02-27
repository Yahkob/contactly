import React from 'react';
import ContactList from '../components/ContactList.js';
import renderer from 'react-test-renderer';
import MockData from '../contacts.json';
import { MemoryRouter } from "react-router-dom";

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <ContactList list={MockData} />
      </MemoryRouter>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
