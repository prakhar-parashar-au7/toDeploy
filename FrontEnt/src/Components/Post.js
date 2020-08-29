import React from 'react'
import { postLiked, savePosts } from '../redux/Actions/postActions'
import {connect} from 'react-redux'

class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key : this.props.key,
        }
    }

    componentDidMount () {
        const {post, likes, comments, id } = this.props
       this.props.savePosts(post, likes, comments, id)
    }

    handleLike = () => {
          
    }

    
   render() {
       
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


const passDispatchMethodsToProps = {
    postLiked : postLiked,
    savePosts : savePosts
}
    //  const passReduxStateToProps = (state) => {
    //      reutrn {

    //      }
    // }



 export default connect (null, passDispatchMethodsToProps)(Post)