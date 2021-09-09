import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import {goToFeed } from '../routes/coordinator'





export const login = (body, clear, history, setRightButton, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            clear();
            goToFeed(history)
            setIsLoading(false)
            setRightButton("Logout")
        })
        .catch((error) => {

            console.log(error)
            setIsLoading(false)
            alert(error.response.data.message)
           
        })

}


export const signUp = (body, clear, history, setRightButton) => {
    axios.post(`${BASE_URL}/users/signup`,body)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            clear()
            goToFeed(history)
            setRightButton("Logout")

        })
        .catch((err) => {
            console.log(err)
            alert(err.response.data.message)
        })

}
    
    
export const createPost = (body, clear, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body,{
        headers: {
            Authorization: localStorage.getItem('token')
        }

    })
        .then((res) => {
            clear()
            setIsLoading(false)
            console.log(res)
            alert('Criado com sucesso e suor!',res)
        })
        .catch((err) => {
            setIsLoading(false)
            console.log(err)
            alert(err.response.message)
        })

}
