export const Authorised = (data)=>{
    return {
        type : "AUTHORISED_USER",
        payload : data
    }
};

export const Tokenfunc = (token)=>{
    return {
        type : "GET_TOKEN",
        payload : token
    }
};