import Post from "../../Components/Post"

const initialState = {
    Posts : []
}

const postModel = {
    post : {
        Title : "",
        Description : "",
        Author : "",
        Date : "",
        id : ""
    },
    Likes : 0,
    Comments : []

}
    



const postReducer = (state=initialState, action) => {
    switch(action.type){
        case("SAVE_POSTS"):
        
        
        const newPosts = action.payload.posts
        
        
         return {
             ...state, Posts : newPosts
         }
             
         

        case("LIKE_POST"):
        console.log(action.payload)
        console.log(state.Posts)
           const updatedLikes =  state.Posts.map((post) => {
            
                if(post._id  == action.payload){
                    console.log(post)
                    post.Likes = post.Likes+1
                }
                return post
            })
            
           return {
                ...state, Posts : updatedLikes
           }


           case ("ADD_COMMENT") :
               console.log("heyyy")
             const  updatedComments = state.Posts.map((post) => {
                 
                   if(post._id == action.payload.id){
                       console.log(post)
                       post.Comments = [...post.Comments, action.payload.presentComment]
                   }

                   return post
                })
                   return {
                       ...state, Posts : updatedComments
                   }
               
       
    default :
      return state    
    }
   
}

export default postReducer