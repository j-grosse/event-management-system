import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../axiosInstance';
const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get(`/api/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((e) => setError(e.response?.data?.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/users/${id}`, user)
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((e) => console.log(e));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // const updatedUser = {...user}
    // updatedUser[name] = value
    // setState(updatedUser)
  };
  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={user?.title || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Author</label>
        <input
          type="text"
          name="author"
          value={user?.author || ''}
          onChange={handleChange}
        />
        <label htmlFor="">Year</label>
        <input
          type="text"
          name="year"
          value={user?.year || ''}
          onChange={handleChange}
        />
        <button>Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
