import React, { Component } from 'react'
import axios from 'axios'

import Post from '../Components/Post'
import { savePosts } from '../redux/Actions/postActions'
import { connect } from 'react-redux'


class Postpage extends Component {

    state = {

        Posts: ""

    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://fast-mountain-25827.herokuapp.com/viewPosts',
        })
            .then((response) => {
                response.data.reverse()
                this.props.savePostsToRedux(response.data)
                const { reduxState } = this.props
                this.setState(reduxState)
            },
                (error) => {
                    console.log(error)
                })

    }



    render() {

        return (
            <div>

                {

                    this.state.Posts !== ""
                        ?
                        this.state.Posts.map(post =>

                            <Post key={post._id} post={post} Likes = {post.Likes} Comments = {post.Comments}/>)
                        :
                        null}
            </div>
        )



    }
}

const mapState = (state) => {
    return {
        reduxState: state
    }
}

const mapDispatch = {
    savePostsToRedux: savePosts
}

export default connect(mapState, mapDispatch)(Postpage)