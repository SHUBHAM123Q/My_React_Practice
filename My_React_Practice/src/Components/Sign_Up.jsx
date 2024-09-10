import React, { useEffect, useState } from 'react'
import google from '../../aset/Google.png'
import { Link, Outlet } from 'react-router-dom'
import {auth,provider} from "./Config";
import {signInWithPopup} from "firebase/auth"
import Shubham from './Shubham';

const Sign_Up = () => {

    const [value,setValue] = useState('')
    const handleClick = () =>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
    return (
        <>
            <div className='m-auto w-[500px] mt-28 bg-white-500'>
                <div className='m-auto'>
                    <h1 className='text-center font-bold text-4xl'>Create Your Account</h1>
                    <p className='text-center mt-2 text-[#7c7c80] text-[15px]'>Welcome back! Please enter yoyr details</p>
                </div>
                <div className='m-auto border-2 mt-3 border-[#7c7c80] w-96 h-10'>
                    <div className='flex justify-center mt-[5px]'>
                        <button className='flex'>
                            <img src={google} className='h-6' />
                            <p className='ms-1 text-[#79787b] font-bold'>Sign up with Google</p>
                        </button>
                    </div>
                </div>

                <h3 className='w-96 m-auto mt-4 font-semibold'>Name</h3>
                <div className='m-auto border-2 mt-2 border-[#7c7c80] w-96 h-10'>
                    <input type='name' placeholder='Enter your name' className='mt-[5.6px] w-[360px] ms-4 outline-none'></input>
                </div>
                <h3 className='w-96 m-auto mt-4 font-semibold'>Email</h3>
                <div className='m-auto border-2 mt-2 border-[#7c7c80] w-96 h-10'>
                    <input type='email' placeholder='Enter your email' className='mt-[5.6px] w-[360px] ms-4 outline-none'></input>
                </div>
                <h3 className='w-96 m-auto mt-4 font-semibold'>Password</h3>
                <div className='m-auto border-2 mt-2 border-[#7c7c80] w-96 h-10'>
                    <input type='password' className='mt-[5.6px] w-[360px] ms-4 outline-none'></input>
                </div>
                <h3 className='w-96 m-auto mt-4 font-semibold'>Retype Password</h3>
                <div className='m-auto border-2 mt-2 border-[#7c7c80] w-96 h-10'>
                    <input type='password' className='mt-[5.6px] w-[360px] ms-4 outline-none'></input>
                </div>
                <div className='m-auto flex w-96 mt-2'>
                    <input type='checkbox' className='' />
                    <p className='text-[#7c7c80] text-[14px] ms-1 font-bold'>I accepted all tearms & conditions.</p>
                </div>
                <Link to="/shubham">
                    {value?<Shubham/>:
                    <button onClick={handleClick} type='submit' className='flex justify-center items-center m-auto h-10 w-96 mt-5 text-[19px] bg-[#1b1c1e] text-white'>Sign in</button>}
                </Link>
                <div className='mb-28 m-auto w-96 mt-3'>
                    <p className='text-center text-[#7c7c80] text-[17px]'>Already have an account? <span className='font-bold ms-1 text-[#58575c]'>Sign in</span></p>
                </div>
            </div>
        </>
    )
}

export default Sign_Up