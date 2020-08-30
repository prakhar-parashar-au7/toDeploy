import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'




class Register extends Component {
    constructor() {
        super()

        this.state = {
            userName: "",
            password: ""

        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'https://fast-mountain-25827.herokuapp.com/userSignUpPost',

            data : {
               
               userName : this.state.userName,
                password : this.state.password
            }
          })
          .then((response) => {
               alert(response.data.message)
          },
          (error) => {
              console.log(error)
          })

    }

    handleuserName = (e) => {
        this.setState({userName : e.target.value})
    }

    handlePassword = (e) => {
           this.setState({password:e.target.value})
    }

    render() {
        return (


            <form onSubmit={this.handleSubmit}>
                <h1>Register Here</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">userName</label>
                    <input onChange= {this.handleuserName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter userName"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={this.handlePassword}type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>

                <br></br><br></br><br></br><br></br>
                <Link to="/login">Login Here</Link>
            </form>
        )
    }

}

export default Register