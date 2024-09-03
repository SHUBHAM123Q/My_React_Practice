import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const { Component } = props
    const navigate = useNavigate();
    useEffect(() => {
        let Signup = localStorage.getItem('signup');
        if (!Signup) {
            navigate('signup')
        }
    })
    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected 