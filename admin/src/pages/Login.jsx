import React, { useContext, useState } from 'react'; // Added useState import
import { assets } from '../assets/assets_admin/assets';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios'
import { toast } from 'react-toastify';

function Login() {
  const [state, setState] = useState('Admin');

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {setAToken,backendUrl} = useContext(AdminContext)

  const onSubmitHandler = async (event) =>{

    event.preventDefault()

    try {

      if( state === 'Admin' ){

        const {data} = await axios.post(backendUrl + '/api/admin/login', {email,password})
        if (data.success){
          localStorage.setItem('aToken',data.token)
          setAToken(data.token)
        } else {
          toast.error(data.message)
        }


      }else {

      }

    } catch (error){


    }

  }



  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border-none rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{state}</span> Login</p>
        <div className='w-full'>
          <p>Email</p>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full mt-1 p-2' type="email" required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full mt-1 p-2' type="password" required/>
        </div>
        <button className='bg-primary text-white font-bold text-lg w-full py-2 rounded-md'>Login</button>
        {
          state === 'Admin'
          ? <p>Doctor Login? <span className='text-primary cursor-pointer underline' onClick={()=>setState('Doctor')}>Click Here</span></p>
          : <p>Admin Login? <span className='text-primary cursor-pointer underline' onClick={()=>setState('Admin')}>Click Here</span></p>
        }
      </div>
    </form>
  );
}

export default Login;
