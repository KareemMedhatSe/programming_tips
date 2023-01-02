import Auth from "../components/Auth/Auth"

const authReducer=(state={authData:null},action)=>{
    switch(action.type){
        case 'Auth':
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
            return {...state,authData:action?.data};
        case 'logout':
            localStorage.clear();
            return {...state,authData:null};
        default:
            return state;
            break;


    }




}

export default authReducer;