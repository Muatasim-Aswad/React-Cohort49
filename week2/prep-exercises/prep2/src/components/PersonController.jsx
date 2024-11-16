import usePerson from '../hooks/usePerson';
import Person from './Person';
import Button from './Button';

const PersonController = () => {
  const [person, updatePerson] = usePerson();
  return (
    <>
      <Button updatePerson={updatePerson} />
      {person && <Person person={person} />}
    </>
  );
};

export default PersonController;
