import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import { BASE_URL } from '../../constants/urls'
import useForm from '../../hooks/useForm'




const AddComment = () => {
    const [form, onChange, clear] = useForm({ body: "" })
    const params = useParams()

    const addComent = () => {
        axios.post(`${BASE_URL}/posts/${params.id}/comments`,form,{
            headers:
            {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                clear()
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

const onSubmitForm = (event) => {
        event.preventDefault()
        addComent(form, clear)
    }



    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'body'}
                    value={form.body}
                    onChange={onChange}
                    label={'Comentario'}
                />
                <Button
                    type={'onSubmit'}
                    color={"primary"}
                >Comentar</Button>
            </form>
        </div>


    )
}

export default AddComment