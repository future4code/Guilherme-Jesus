import axios from 'axios'
import { useEffect, useState } from 'react'


const useRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console(err)
                alert("Tente novamente")
            })
        },[url])

       return [data]
}    


export default useRequestData