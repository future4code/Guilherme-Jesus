
import React from 'react'
import useProtectedpage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'


const FeedPage = () => {
    useProtectedpage() 
    const feed = useRequestData([],`${BASE_URL}/posts`)
    console.log(feed)
   
    const cardsOfFeed = feed.map((cards)=>{
        return <p key={cards}>{cards.id}</p>

    })

    return (
        <div>
            <h1>Página do Feed</h1>
            <p>{cardsOfFeed}</p>
            
        </div>


    )
}

export default FeedPage