import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [showForm, setShowForm] = useState(false);

        useEffect(() => {
          fetch('http://localhost:8080/get')
            .then(response => response.json())
            .then(data => {
              setProfiles(data);
            })
            .catch(error => {
              console.error(error);
            });
        }, [profiles.length]);

  if (!profiles || Object.keys(profiles).length === 0) {
    return <div>Loading...</div>;
  }
  const removeById = async (id) => {
    const repsone = await fetch(`http://localhost:8080/delete/${id}`, {
      method: 'DELETE'
    })

    const data = await repsone.json();
    setProfiles(profiles.filter(eachData => eachData.id !== id))
  }
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    profiles.map((eachObj) => {
      const { id, name, serialno, status, age, about, skills, index } = eachObj
      return (<div key={index}>
        <h1>{name}</h1>
        <p>id : {id}</p>
        <p>Serial No: {serialno}</p>
        <p>Age: {age}</p>
        <p>Status: {status}</p>
        <p>About: {about}</p>
        <p>Skills: {skills}</p>
        {/* <button onClick={()=>{edit}}>edit</button> */}
        <button onClick={() => (removeById(id))}>delete</button>
        {/* <button onClick={()=>(newUser())}>AddUser</button> */}
        <button onClick={toggleForm}>{showForm ? "Hide Form" : "Add User"}</button>
        {showForm && <Form />}
      </div>
      )
    })
  )
}
export default App
