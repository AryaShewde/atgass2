import { useEffect, useState } from 'react';
import './App.css';
import Users from './components/Users';
import axios from 'axios';
import Loading from './components/Loading';

function App() {
  const [users, setUsers] = useState([]);
  const [errormess, setErrormess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users`)
        setUsers(res.data)
        setLoading(false);
        console.log(res.data)
      } catch (error) {
        console.log(error)
        setErrormess(true)
      }

    }
    fetchUsers()
  }, [])
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
          <Users users={users} errormess={errormess} />
      )}
    </div>
  );
}

export default App;
