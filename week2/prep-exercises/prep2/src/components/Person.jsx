const Person = ({ person }) => {
  return (
    <ul>
      <li key="0">First Name: {person.firstName}</li>
      <li key="1">Last Name: {person.lastName}</li>
      <li key="2">Email: {person.email}</li>
    </ul>
  );
};

export default Person;
