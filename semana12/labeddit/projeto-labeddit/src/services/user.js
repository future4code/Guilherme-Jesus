import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeed } from '../routes/coordinator'




export const login = (body, clear, history, setRightButton) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            clear();
            goToFeed(history)
            setRightButton("Logout")
        })
        .catch((err) => {
            console.log(err)
            alert(err.response.data.message)
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