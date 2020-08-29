const initialState = {
    post : {
        Title : "",
        Description : "",
        Author : "",
        Date : ""
    },
    Likes : 0,
    Comments : []

}



const postReducer = (state=initialState, action) => {
    switch(action.type){
        case("LIKE_POST"):
        
        return {
             ...state, Likes : state.Likes+1

        }
       
    default :
      return state    
    }
   
}

export default postReducer