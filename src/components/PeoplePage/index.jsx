import React, { useState, useEffect } from 'react';
import { PeopleTable } from '../PeopleTable';

import { getPeople } from '../../api';

export const PeoplePage = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const addPeople = async() => setPeople(await getPeople());

    addPeople();
  }, []);

  return <PeopleTable people={people} />;
};
