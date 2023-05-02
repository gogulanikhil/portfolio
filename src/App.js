import './App.css';


  import React, { useState, useEffect } from 'react';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/get')
      .then(response => response.json())
      .then(data => {
        setProfile(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  if (!profile || Object.keys(profile).length === 0) {
    return <div>Loading...</div>;
  }
  return (
    profile.map((eachObj)=>{
      const{name,serialno,status,age,about,skills}=eachObj
      return (<div>
        <h1>{name}</h1>
        <p>Serial No: {serialno}</p>
        <p>Age: {age}</p>
        <p>Status: {status}</p>
        <p>About: {about}</p>
        <p>Skills: {skills}</p>
      </div>
      );
    })
  )
}

export default App;
