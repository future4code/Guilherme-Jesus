import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { goToFeed } from '../../routes/coordinator'
import SignUpForm from './SignUpForm'




const SignUpPage = ({setRightButton}) => {
    useUnprotectedPage()
    return (

        <SignUpForm setRightButton={setRightButton}/>
               
      
    )
}

export default SignUpPage