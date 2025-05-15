import ListGroup from './components/ListGroup';
import Title from './components/Title';

function App() {
  const food = [
    {
      id: 1,
      title: 'Hamburger',
    },
    {
      id: 2,
      title: 'Pizza',
    },
    {
      id: 3,
      title: 'Cheese',
    },
  ];
  const users = [
    {
      id: 1,
      title: 'Adam Smith',
    },
    {
      id: 2,
      title: 'John Doe',
    },
    {
      id: 3,
      title: 'Anna Christina',
    },
  ];

  const message1 = 'My Food';
  const message2 = 'My Users';

  return (
    <div>
      <Title>Hello My Friends</Title>
      <ListGroup text={message1} data={food} />
      <br />
      <br />
      <ListGroup text={message2} data={users} />
    </div>
  );
}

export default App;
