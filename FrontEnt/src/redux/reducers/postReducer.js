const initialState = []

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
        case("SAVE_POST"):
        const newPost = {...postModel, post : action.payload.post, Likes : action.payload.Likes, Comments: action.payload.Comments, id: action.payload.id}
         return [
            ...state, newPost
         ]
             
         

        case("LIKE_POST"):
              
        
        return  
        state.map((post) => {
            if(post.id == action.payload.id){
                return {
                    ...post, Likes : post.Likes+1
                }
            }
        })
       
    default :
      return state    
    }
   
}

export default postReducer