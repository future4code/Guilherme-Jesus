
import React from 'react'
import useProtectedpage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { ContainerFeed, PostFooter } from './styled'
import { Avatar, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { goToAddPost, goToPost } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import ChatIcon from '@material-ui/icons/Chat';
import PostForm from '../AddPost/PostForm'

const FeedPage = () => {
    useProtectedpage()
    const history = useHistory()
    const feed = useRequestData([], `${BASE_URL}/posts`)
    console.log(feed)

    const onClickCard = (id) => {
        goToPost(history, id)
    }



    const cardsOfFeed = feed && feed.map((cards) => {
        return (
            <ContainerFeed key={cards.id}>
                <CardContent onClick={() => onClickCard(cards.id)}>
                    <CardHeader
                        avatar={<Avatar aria-label="recipe" className={cards.username.avatar}></Avatar>}
                        action={<IconButton aria-label="settings"></IconButton>}
                        title={cards.username}
                        subheader={cards.createdAt}
                    />
                    <Typography color="textSecondary" gutterBottom>{cards.title}</Typography>
                    <Typography variant="h5" component="h5" color="textPrimary" >{cards.body}</Typography>
                </CardContent>
                <PostFooter>
                <ArrowUpwardIcon fontSize="large" color="secondary" >{cards.userVote}</ArrowUpwardIcon>
                <ArrowDownwardIcon fontSize="large" color="primary">{cards.voteSum}</ArrowDownwardIcon>
                <ChatIcon fontSize="large"> {cards.commentCount} Comentários</ChatIcon>
                </PostFooter>
            </ContainerFeed>



        )
    })

    return (
        <div>
            <PostForm/>
            <Typography align={'center'} variant="h5" component="h5" color="textPrimary">Feed</Typography>
            {cardsOfFeed}
        </div>

    )
}

export default FeedPage


// body: "Text12"
// commentCount: null
// createdAt: "2021-09-01T18:06:54.667Z"
// id: "fd08cf3a-d4af-4ace-bae1-26cee07d6e6a"
// title: "Test12"
// userId: "aa8fc63a-c5ec-4f65-a30d-9e89526ed51c"
// userVote: null
// username: "KG"
// voteSum: "1"
