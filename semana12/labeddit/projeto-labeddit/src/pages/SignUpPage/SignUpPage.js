import React from 'react'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import SignUpForm from './SignUpForm'




const SignUpPage = ({setRightButton}) => {
    useUnprotectedPage()
    return (

        <SignUpForm setRightButton={setRightButton}/>
               
      
    )
}

export default SignUpPage