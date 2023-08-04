import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axiosInstance';
const Users = () => {
  const [users, setUsers] = useState(null); // users array from backend
  useEffect(() => {
    axios
      .get(`/api/users`)
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user._id}>
              <Link to={`/users/${user._id}`}>
                {user.title} by {user.author}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Users;
