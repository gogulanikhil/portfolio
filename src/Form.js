// import userEvent from "@testing-library/user-event"
import { useState } from "react"
import axiosAPI from "./axiosAPI"

const Form = () => {
    const [values, setValues] = useState({
        serialno: "",
        name: "",
        age: "",
        status: "",
        about: "",
        skills: ""
    })
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axiosAPI.saveEmployee(values)
            console.log(response)

        } catch (error) {
            console.log(error)

        }
    };
    const handleChanges = (event) => {
        const value = event.target.value
        setValues({ ...values, [event.target.name]: value })
    }
    return <div>
        <h1>ENTER THE DETAILS</h1>
        <form onSubmit={handleSubmit}>
            serialno:<input
                type="number"
                name="serialno"
                value={values.serialno}
                onChange={handleChanges}>
            </input><br />
            Name:<input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChanges}>
            </input>
            <br />
            Age:<input type="number"
                name="age"
                value={values.age}
                onChange={handleChanges}>
            </input><br />
            About:<input type="text"
                name="about"
                value={values.about}
                onChange={handleChanges}>
            </input><br />
            Status:<input
                type="text"
                name="status"
                value={values.status}
                onChange={handleChanges}>
            </input><br />
            Skills:<input
                type="text"
                name="skills"
                value={values.skills}
                onChange={handleChanges}>
            </input><br></br>
            <button>submit</button>
        </form>
    </div>
}
export default Form