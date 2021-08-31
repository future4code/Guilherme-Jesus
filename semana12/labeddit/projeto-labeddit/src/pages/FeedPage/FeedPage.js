import Button from '@material-ui/core/Button'
import React from 'react'
import useProtectedpage from '../../hooks/useProtectedPage'



const FeedPage = () => {
  useProtectedpage()  
    
    return (
        <div>
            <h1> Página do Feed</h1>
            <Button variant="contained" color="primary">Primary</Button>
        </div>


    )
}

export default FeedPage