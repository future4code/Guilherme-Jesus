import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';


const Header = ({rightButton, setRightButton}) => {
  const history = useHistory()
  const token = localStorage.getItem('token')


const logout = () =>{
  localStorage.removeItem("token")
}

const rightButtonAction = () =>{
  if (token){
    logout()
    setRightButton("Login")
    goToLogin(history)
  } else{
    goToLogin(history)
  }
}


  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeed(history)} color="inherit">Labeddit</Button>
        <Button onClick={rightButtonAction} color="inherit">{rightButton}</Button>
      </StyledToolbar>
    </AppBar>
  );
}
export default Header