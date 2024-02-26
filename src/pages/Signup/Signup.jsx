import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";


const SignUp = () => {

  const[input, setInput] = useState({
    fullName: "",
    username: "",
    password:"",
    confirmPassword: "",
    gender: ""
  })

  const handleCheckboxChange = (gender) =>{
setInput({...input,  gender})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(input);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

      <h1 className="text-3xl font-semibold text-center text-gray-300">SignUp <span className="text-blue-500">ChatsApp</span></h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Full Name </span>
          </label>
          <input type="text" placeholder="Enter Username" value={input.fullName}
          onChange={(e)=> setInput({...input, fullName: e.target.value})}
           className="w-full input input-bordered h-10"></input>
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Username </span>
          </label>
          <input type="text" placeholder="Enter Username"
          value={input.username}
          onChange={(e)=>setInput({...input, username: e.target.value})}
          className="w-full input input-bordered h-10"></input>
        </div>
        <div>
          <label className="label">
          <span className="text-base label-text">Password</span>
        </label>
        <input type="password" placeholder="Enter password"
         value={input.password}
         onChange={(e)=>setInput({...input, password: e.target.value})}
        className="w-full input input-bordered h-10"></input>
        </div>
        <div>
          <label className="label">
          <span className="text-base label-text">Confirm Password</span>
        </label>
        <input type="password" placeholder="Enter password"
         value={input.confirmPassword}
         onChange={(e)=>setInput({...input, confirmPassword: e.target.value})}
        className="w-full input input-bordered h-10">

        </input>
        </div>
        <Link to="/login" className="text-sm text-start text-white hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account</Link>
        <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender}/>
        <div>
        <button className="btn btn-block btn-sm mt-2">Sign Up</button>

        </div>
      </form>
      </div>

      </div>
  )
}
export default SignUp;