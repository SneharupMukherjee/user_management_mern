import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState({
    name: '',
    class: ''
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setUser(prevInput => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(user);
  }

  function addUser (event) {
    event.preventDefault();
    const newUser = {
      name: user.name,
      class: user.class
    };
    axios.post('newUser', newUser)
      .then((response) => {console.log(response)})
      .catch((err) => console.log('Error: ' +err));
    console.log(newUser);
  }

  return (
    <div className="App">
      <input 
      onChange={handleChange}
      name="name" 
      value={user.name}
      placeholder='Name'>
      </input>
      <input 
      onChange={handleChange}
      name="class" 
      value={user.class}
      placeholder='Class'>
      </input>
      <button onClick={addUser}>
        Add User
      </button>
    </div>
  );
}

export default App;
