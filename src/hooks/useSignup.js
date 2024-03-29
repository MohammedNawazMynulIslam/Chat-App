import { useState } from "react"
import toast from 'react-hot-toast';
const useSignup = () => {
const [loading, isLoading] = useState(false);

const signup = async({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
})=>{
    const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
    if(!success) return;
}
}
export default useSignup

function handleInputErrors({ fullName, username, password, confirmPassword, gender}){
        if(!fullName|| !username|| !password|| !confirmPassword|| !gender){
                toast.error("Please fill in all fields")
            }
    }