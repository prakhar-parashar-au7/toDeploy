import React from 'react'

class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key : this.props.key,
        }
    }
   render() {
       console.log(this.props.id)
       return(
        <div>
        <h2>{this.props.Title}</h2><br></br><p>{this.props.Description}</p>
        <br></br><p>{this.props.Author}</p><br></br>
        <p>{this.props.DateTime}</p>

        <button onClick={this.handleLike}>Like</button>
        <button onClick = {this.handleComment}>Comment</button>
    </div>
       )
   }



}

export default Post