import React, {useState} from 'react'
import "../App/style/Form.css"

const UserForm = () => {
    const [disable, setDisabled] = useState(true)
    const [input, setInput] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''
    })
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        console.log(input, 'data')
    }
    return(
        <div className='form'>
            <h1>User form</h1>
            <forrm className="container">
            <div className='item'>
                {/* <label>First name</label> */}
                <input 
                placeholder='Firstname'
                value={input.firstname}
                name="firstname"
                onChange={handleChange}
                 />
            </div>
            <div className='item'>
            {/* <label>Last name</label> */}
                <input 
                placeholder='Lastname'
                value={input.lastname}
                name="lastname"
                onChange={handleChange}
                 />
            </div>
            <div className='item'>
            {/* <label>Email</label> */}
                <input 
                placeholder='Email'
                value={input.email}
                name="email"
                onChange={handleChange}
                 />
            </div >
            {/* <label>Password</label> */}
                <input 
                placeholder='Password' 
                value={input.password}
                name="password"
                onChange={handleChange}
                />
            </forrm>
            <div>

            <button disabled={disable}>Submit</button>
            </div>
        </div>
    )
}
export default UserForm