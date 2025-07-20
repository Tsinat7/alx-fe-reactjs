import Header from './Header';
import Dashboard from './Dashboard';
import UserProvider from './context/UserProvider';

function App() {
  return (
    <UserProvider>
      <Header />
      <Dashboard />
    </UserProvider>
  );
}

export default App;