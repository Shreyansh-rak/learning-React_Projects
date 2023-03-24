import UserContext from './store/user-context';
import UserFinder from './components/UserFinder';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Suru' },
];

function App() {
  const userContext = {
    users: DUMMY_USERS
  }

  return (
    <UserContext.Provider value={userContext}>
      <UserFinder />
    </UserContext.Provider>
  );
}

export default App;
