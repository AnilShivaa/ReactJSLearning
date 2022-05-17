import { useState } from "react"

export default function FormComponent() {

    const [user, setUser]=useState({
        name:"",
        dept:"",
        age:"",
        salary:""
    })

    let info=()=>{
        alert("Thank you for registration")
    }

    return (
        <>
            <h4 id="frm-title">Welcome to Employee Registration Form</h4>

            <div id="registrationFrm">
                <form method="get" action="backend.js">
                    Employee Name:<input type="text" name="name"></input><br/>
                    Employee Dept:<input type="text" name="dept"></input><br/>
                    Employee Age:<input type="number" name="age"></input><br/>
                    Employee Salary:<input type="number" name="salary"></input><br/><br/>
                    <button onClick={info}>Register</button>
                </form>
            </div>
        </>
    )
}