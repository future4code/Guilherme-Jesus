import { Avatar, CardHeader, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useProtectedpage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { ContainerPostId, ContainerTamPost } from './styled'


const PostPage = () => {
    useProtectedpage()
    const params = useParams()
    const posts = useRequestData([],`${BASE_URL}/posts/${params.id}/comments`)[1]
    console.log(posts)
    
    return (
        <ContainerPostId>
            <ContainerTamPost>
            <CardHeader 
            avatar={<Avatar aria-label="recipe"></Avatar>} 
            action={<IconButton aria-label="settings"></IconButton>}
            title = {posts && posts.username}
            />
            <Typography  align={'center'} variant={"h3"}>{posts && posts.body}</Typography>
            </ContainerTamPost>
        </ContainerPostId>
    ) 
}

export default PostPage