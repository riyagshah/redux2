export const todo_func = (data)=>{
    return {
        type : "ADD_TODO",
        payload : data
    }
};

export const post_todo = (data)=> {
    return {
        type : "POST_NEW_TODO",
        payload : data
    }
}
export const delete_todo = (id)=>{
    return {
        type : "DELETE_TODO",
        payload : id
    }
};

export const upated_fun = (payload)=>{
    return {
        type : "UPDATED_TODO",
        payload
    }
};

export const toggle_fun = (payload)=>{
    return {
        type : "TOGGLE_TODO",
        payload
    }
};

