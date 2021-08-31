import ThemeProvider from '@material-ui/styles/ThemeProvider';
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import theme from './constants/theme';
import Router from './routes/Router'



const App = () => {
const token = localStorage.getItem('token')
const [rightButton, setRightButton] = useState(token ? 'Logout' : 'Login')
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
      <Header rightButton = {rightButton} setRightButton = {setRightButton}/>
      <Router setRightButton = {setRightButton}/>
      </BrowserRouter>
    </ThemeProvider>
  
  )
}

export default App;
