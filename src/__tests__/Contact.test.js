import React from 'react';
import Contact from '../components/Contact.js';
import renderer from 'react-test-renderer';
import MockData from '../contacts.json';
import { MemoryRouter } from "react-router-dom";

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Contact contact={MockData[0]} />
      </MemoryRouter>
    ).toJSON();
expect(tree).toMatchSnapshot();
});
