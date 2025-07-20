import { useUser } from './context/UserContext';

function Header() {
  const { user } = useUser();

  return (
    <header>
      <h1>Welcome, {user.name}</h1>
    </header>
  );
}

export default Header;