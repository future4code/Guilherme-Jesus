import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/user'
import CircularProgress from '@material-ui/core/CircularProgress';





const PostForm = () => {
    const [form, onChange, clear] = useForm({ title: "", body: "" })
    const [isLoading, setIsLoading] = useState(false)
    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear, setIsLoading)
    }



    return (
        <div>
            <h1>Criar Post</h1>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'title'}
                    value={form.title}
                    onChange={onChange}
                    label={"Título"}
                    required
                    type={'title'}
                />
                <TextField
                    name={'body'}
                    value={form.body}
                    onChange={onChange}
                    label={"Descrição"}
                    required
                    type={'body'}
                />
                <Button
                    type={'onSubmit'}
                    variant={'contained'}
                >
                    {isLoading ? <CircularProgress size= {40} color ={'primary'}/> : <>Enviar</>}
                    </Button>
            </form>
        </div>


    )
}

export default PostForm