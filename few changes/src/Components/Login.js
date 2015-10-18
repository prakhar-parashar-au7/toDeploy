import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class Login extends Component {
    constructor() {
        super()

        this.state = {
            userName: "",
            password: "",
            isAuthenticated: false

        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        alert("Please wait until you get the login confirmation message, it might take few seconds")
        axios({
            method: 'post',
            url: 'https://fast-mountain-25827.herokuapp.com/userLoginPost',

            data: {

                userName: this.state.userName,
                password: this.state.password
            }
        })
            .then((response) => {
                this.setState({ isAuthenticated: true })
                alert(response.data.message)
                console.log(response.data)

            },
                (error) => {
                    console.log(error)
                })

    }

    handleuserName = (e) => {
        this.setState({ userName: e.target.value })
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    render() {
        return (


            <form onSubmit={this.handleSubmit}>
                <h1>Login here</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">userName</label>
                    <input onChange={this.handleuserName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter userName"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={this.handlePassword} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>




                <br></br><br></br><br></br>
                {this.state.isAuthenticated &&
                    <div>
                        <Link to={'/Posts'}>See Posts</Link>
                        <br></br>
                        <Link to={'/createPost'}>Create Post</Link>
                    </div>
                }
            </form>
        )
    }

}

export default Login;