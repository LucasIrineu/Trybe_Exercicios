import './App.css';

const tasksArray = ['wake up', 'breakfast', 'fight the world head on', 'lunch', 'show some intense love for that one person', 'afternoon sandwich', 'relaxing', 'playing some music', 'dinner', 'time for that big nap']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul> {tasksArray.map((element) => Task(element))} </ul>
  );
}

export default App;
