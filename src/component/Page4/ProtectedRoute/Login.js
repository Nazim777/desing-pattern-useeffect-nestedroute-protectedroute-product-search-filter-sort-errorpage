import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setUser}) => {
    const navigate = useNavigate()
    const [LoginUser,setLoginUser] = useState({
        name:'',
        email:''
    })
    const handleChange = (e)=>{

       
        setLoginUser({
            ...LoginUser,
            [e.target.name]:e.target.value
        })
    }
    const handleClick = (e)=>{
        e.preventDefault()
        if(!LoginUser.name || !LoginUser.email) return
        setUser({...LoginUser})
        navigate('/dashboard')
    }
  return (
    <div>
        <form >
            <input type="text" name='name' placeholder='name' value={LoginUser.name} onChange={handleChange}/> <br />
            <input type="text" name='email'  placeholder='email' value={LoginUser.email} onChange={handleChange}/><br />
            <button onClick={handleClick} >Login</button>
        </form>
      
    </div>
  )
}

export default Login
