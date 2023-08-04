import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from '../axiosInstance';
const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); // user object from backend
  useEffect(() => {
    axios
      .get(`/api/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((e) => setError(e.response?.data?.message));
  }, []);
  const handleDelete = () => {
    axios
      .delete(`/api/users/${id}`)
      .then((res) => navigate('/'))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <p>Phone: {user.phoneNumber}</p>
          <p>Active: {user.isActive}</p>
          <Link to={`/users/${id}/update`}>Update User</Link>
          <button onClick={handleDelete}>Delete User</button>
        </>
      )}
    </div>
  );
};

export default UserDetails;
