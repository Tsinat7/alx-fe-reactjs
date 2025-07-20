import { useUser } from './context/UserContext';

function Dashboard() {
  const { user, setUser } = useUser();

  const changeName = () => {
    setUser(prev => ({ ...prev, name: 'Tsinat' }));
  };

  return (
    <main>
      <p>Email: {user.email}</p>
      <button onClick={changeName}>Change Name to Tsinat</button>
    </main>
  );
}

export default Dashboard;