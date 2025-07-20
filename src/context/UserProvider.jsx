import { useState } from 'react';
import { UserContext } from './UserContext';

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;