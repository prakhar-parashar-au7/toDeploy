export const postLiked = (id) => {

    return {
        type : "LIKE_POST",
        payload : id
    }
}

export const savePosts = (post, Likes, comments, id) => {
    return {
        type : "SAVE_POST",
        payload : {
            post : post,
            Likes : Likes,
            Comments: comments,
            id : id
        }
    }
}

