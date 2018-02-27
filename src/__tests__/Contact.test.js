import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../components/Contact';
import renderer from 'react-test-renderer';
import MockData from '../contacts.json';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Contact contact={MockData[0]} />
      </MemoryRouter>
    ).toJSON();
expect(tree).toMatchSnapshot();
});
