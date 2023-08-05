import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosInstance';
const NewUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isActive, setIsActive] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/api/users`, { name, email, age, phoneNumber, isActive })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Age</label>
        <input
          type="text"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="">Phone</label>
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="">Active</label>
        <input
          type="text"
          name="isActive"
          value={isActive}
          onChange={(e) => setIsActive(e.target.value)}
        />
        <button>Create User</button>
      </form>
    </div>
  );
};

export default NewUser;
