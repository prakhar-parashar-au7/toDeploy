export const postLiked = (id) => {
    return {
        type : "LIKE_POST",
        payload : id
    }
}

export const savePosts = (posts) => {
    console.log(posts)
    
    return {
        type : "SAVE_POSTS",
        payload : {
            posts : posts
        }
    }
}

export const sendComment = (id, presentComment) => {
    
        return {
            type : "ADD_COMMENT",
            payload : {
                id : id,
                presentComment : presentComment

            }
        }
    }

