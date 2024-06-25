import './App.css';
import React ,{ useState } from 'react';

function App() {
  const [name,setName] = useState("");
  const [pass,setPass] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
console.log(name,pass)
  }
  return (
    <div className="App">
      <form onSubmit={handleClick}>
      <div>
        <label for="textName">UserName:</label>
        <input type='text' 
        id="textName"
        value={name}
          onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        <label for="passWord">Password:</label>
        <input type='password'
        id="passWord"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
