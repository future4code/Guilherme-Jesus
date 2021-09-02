import React from "react"
import {Route, Switch } from "react-router-dom"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostForm from "../pages/AddPost/PostForm"
import PostPage from "../pages/PostPage/PostPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"




const Router = ({setRightButton}) => {
    return (

        
            <Switch>
                <Route exact path="/login">
                    <LoginPage setRightButton = {setRightButton}/>
                </Route>

                <Route exact path="/cadastro">
                    <SignUpPage  setRightButton = {setRightButton}/>
                </Route>

                <Route exact path="/posts/:id/comments">
                    <PostPage/>
                </Route>

                <Route exact path="/">
                    <FeedPage />
                </Route>

                <Route exact path="/posts">
                    <PostForm/>
                </Route>

    
            </Switch>
      
    )
}


export default Router