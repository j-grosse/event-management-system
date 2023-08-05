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
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={user?.name || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          value={user?.email || ''}
          onChange={handleChange}
        />
        <label htmlFor="">Age</label>
        <input
          type="text"
          name="age"
          value={user?.age || ''}
          onChange={handleChange}
        />
        <label htmlFor="">Phone</label>
        <input
          type="text"
          name="phoneNumber"
          value={user?.phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="">Active</label>
        <input
          type="checkbox"
          name="isActive"
          value={user?.isActive}
          onChange={(e) => setIsActive(e.target.value)}
        />
        <button>Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
