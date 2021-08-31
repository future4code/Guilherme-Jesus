import React from 'react'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'



const PostPage = () => {
    useUnprotectedPage()
    return (

        <div>
            <h1> Página dos Posts </h1>

        </div>


    )
}

export default PostPage