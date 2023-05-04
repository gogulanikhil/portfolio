// import userEvent from "@testing-library/user-event"
import { useState } from "react"

const Form = () => {
    // const [name, setName] = useState([])
    // const[serialno,setSerialno]=useState([])
    // const [age, setAge] = useState([])
    // const [about, setAbout] = useState([])
    // const [status, setStatus] = useState([])
    // const [skills, setSkills] = useState([])
    // const handleNameChange = (event) => {
    //     setName(event.target.value)
    // }
    // const handleAgeChange = (event) => {
    //     setAge(event.target.value)
    // }
    // const handleAboutChange = (event) => {
    //     setAbout(event.target.value)
    // }
    // const handleStatusChange = (event) => {

    //     setStatus(event.target.value)
    // }
    // const handleSkillsChange = (event) => {
    //     setSkills(event.target.value)
    // }
    // const handleSerialnoChange=(event)=>{
    //     setSerialno(event.target.value)
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
    } 
    const [values,setValues]=useState({
        name:"",
        age:"",
        status:"",
        about:"",
        skills:""
    })
    const response=()=>{fetch(`http://localhost:8080/create`)

    }
    const handleChanges=(event)=>{
        const {name,value}=event.target
        // setValues(event.target.name)
        setValues({...values,[name]:value})
    }
    return <div>
        <h1>ENTER THE DETAILS</h1>
        <form onSubmit={handleSubmit}>
            {/* <div> */}
            serialno:<input type="number"
            name="serialno"
            // value={serialno}
            // onChange={handleSerialnoChange}>
            value={values.name}
            onChange={handleChanges}>
            </input><br/>
            Name:<input
                type="text"
                name="name"
                // value={name}
                // onChange={handleNameChange}>
                value={values.name}
                onChange={handleChanges}>
            </input>
            <br />
            Age:<input type="number"
                name="age"
                // value={age}
                // onChange={handleAgeChange}>
                value={values.age}
                onChange={handleChanges}>
            </input><br />
            About:<input type="text"
                name="about"
                // value={about}
                // onChange={handleAboutChange}>
                value={values.about}
                onChange={handleChanges}>
            </input><br />
            Status:<input
                type="text"
                name="status"
                // value={status}
                // onChange={handleStatusChange}>
                value={values.status}
                onChange={handleChanges}>
            </input><br />
            Skills:<input
                type="text"
                name="skills"
                // value={skills}
                // onChange={handleSkillsChange}>
                value={values.skills}
                onChange={handleChanges}>
            </input>
            {/* </div> */}
        </form>
    </div>
}
export default Form