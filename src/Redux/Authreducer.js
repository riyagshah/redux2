const init = {auth : false , token : null};

export const Authreducer = (store = init, {type,payload})=> {
    switch (type) {
        case "AUTHORISED_USER":
            return {...store,auth : payload};
        case "GET_TOKEN":
            return {...store, token : payload}
        default:
            return store;
    }
};

