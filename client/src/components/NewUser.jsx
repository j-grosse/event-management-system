import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosInstance';
const NewUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // let defaultImage = ""
    // {image: image || defaultImage}

    axios
      .post(`/api/users`, { name, email, age })
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
          onChange={(e) => setage(e.target.value)}
        />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
