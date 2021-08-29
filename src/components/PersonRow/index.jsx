import React from 'react';
import { personTypes } from '../../types';

export const PersonRow = ({ person }) => (
  <tr className="Person">
    <td><strong>{person.name}</strong></td>
    <td>{person.sex}</td>
    <td>{person.born}</td>
    <td>{person.died}</td>
    <td>{person.fatherName}</td>
    <td>{person.motherName}</td>
  </tr>
);

PersonRow.propTypes = {
  person: personTypes.isRequired,
};
