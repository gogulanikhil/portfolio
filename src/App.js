import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [profiles, setProfiles] = useState([]);

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
  const removeById= async(id)=>{
      // fetch(`http://localhost:8080/delete/${id}`,{
      //   method:'DELETE'
      // }).then(response => response.json())
      //   .then(data=>{
      //     console.log(data)
      //     setProfiles(profiles.filter(eachObj => eachObj.id !== id));
      //   })
      //   .catch(error => {
      //     console.error('There was a problem with the delete operation:',error);
      //   });

      const repsone = await fetch(`http://localhost:8080/delete/${id}`, {
        method : 'DELETE'
      })

      const data = await repsone.json();
      console.log(data)
      setProfiles(profiles.filter(eachData => eachData.id !== id))

    }

    console.log(profiles)
  // const edit=(id)=>{

  // }
  return (
    profiles.map((eachObj) => {
      const {id,name, serialno, status, age, about, skills ,index} = eachObj
      return (<div key={index}>
        <h1>{name}</h1>
        <p>id : {id}</p>
        <p>Serial No: {serialno}</p>
        <p>Age: {age}</p>
        <p>Status: {status}</p>
        <p>About: {about}</p>
        <p>Skills: {skills}</p>
        {/* <button onClick={()=>{edit}}>edit</button> */}
        <button onClick={()=>(removeById(id))}>delete</button>
      </div>
      );
    })
  )
}
export default App;
