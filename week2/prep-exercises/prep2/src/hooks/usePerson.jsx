import { useState, useEffect } from 'react';

const usePerson = () => {
  const [person, setPerson] = useState(null);
  const [update, setUpdate] = useState(false);
  const updatePerson = () => setUpdate(true);

  const getPerson = async () => {
    const res = await fetch(
      'https://www.randomuser.me/api?results=1&inc=name,email',
    );
    const { results } = await res.json();
    const person = results[0];

    return {
      firstName: person.name.first,
      lastName: person.name.last,
      email: person.email,
    };
  };

  useEffect(() => {
    (async () => {
      const newPerson = await getPerson();
      setPerson((p) => ({ p, ...newPerson }));
      update && setUpdate(false);
    })();
  }, [update]);

  return [person, updatePerson];
};

export default usePerson;
