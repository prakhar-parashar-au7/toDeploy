import React, { Component } from 'react'
import axios from 'axios'

import Post from '../Components/Post'


class Postpage extends Component {

    state = {

        posts: []

    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/viewPosts',
        })
            .then((response) => {
                this.setState({ posts: response.data })
                console.log(response.data)
            },
                (error) => {
                    console.log(error)
                })

    }

    handleLike = (e) => {

        console.log(e.target.getAttribute("key"))


    }

    render() {
        return (
            <div>


                {this.state.posts.map(post =>

                    <Post key={post._id} id={post._id} Title={post.Title} Description={post.Description} Author={post.Author} DateTime={post.DateTime} post={post} likes={post.Likes} comments={this.props.comments} />

                    //  <div key = {post._id}>
                    //      <h2>{post.Title}</h2><br></br><p>{post.Description}</p>
                    //      <br></br><p>{post.Author}</p><br></br>
                    //      <p>{post.DateTime}</p>

                    //      <button onClick={this.handleLike}>Like</button>
                    //      <button onClick = {this.handleComment}>Comment</button>
                    //  </div>

                )}
            </div>
        )



    }
}




export default Postpage;