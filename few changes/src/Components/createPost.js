import React, { Component } from 'react'
import axios from 'axios'

class CreatePost extends Component {

    constructor(){
        super()
        this.state = {
            Title : "",
            Description : "",
            Author : ""
        }
    }
   

    handleClick = () => {
        console.log("he")
        axios ({
            method : "post",
            url : "https://fast-mountain-25827.herokuapp.com/createPost",
            data : {
                Title : this.state.Title,
                Description : this.state.Description,
                Author : this.state.Author
            }
        })
        .then((response) => {
            alert(response.data.message)

        },
        (error) => {
            console.log(error)
        })
    }


    handleChange = (e) => [
        this.setState({[e.target.name]: e.target.value})
    ]

    render() {

        return (
            <div>

            
                <label>Title</label>
                <input name = "Title"onChange = {this.handleChange}></input>
                <br></br><br></br>
                <label>Description</label>
                <textarea name="Description" onChange = {this.handleChange}></textarea>
                <br></br><br></br>
                <label>Author</label>
                <input name= "Author" onChange = {this.handleChange}></input>
                <button onClick = {this.handleClick}>Submit</button>

                <br></br><br></br><br></br>
                Please wait for 5-10 seconds to get confirmation from database.
                After it, check your post on posts page
                </div>

        )

    }
}

export default CreatePost