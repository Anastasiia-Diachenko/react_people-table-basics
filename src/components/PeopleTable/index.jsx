import React from 'react';
import PropTypes from 'prop-types';
import { personTypes } from '../../types';
import { PersonRow } from '../PersonRow';

import './PeopleTable.css';

export const PeopleTable = ({ people }) => (
  <table className="table">
    <thead>
      <tr className="columnTitles">
        <th>Name</th>
        <th>Sex</th>
        <th>Born</th>
        <th>Died</th>
        <th>Mother</th>
        <th>Father</th>
      </tr>
    </thead>
    <tbody>
      {people.map(person => (
        <PersonRow key={person.slug} person={person} />
      ))}
    </tbody>
  </table>
);

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(personTypes.isRequired).isRequired,
};
