import * as api from '../api/index';
export const signin=(formInfo,navigate)=>async (dispatch)=>{
try {
    const {data}=await api.signIn(formInfo);
    dispatch({type:'Auth',data})
    navigate('/');
} catch (error) {
    console.log(error)
}
}

export const signup=(formInfo,navigate)=>async (dispatch)=>{
    try {
        console.log('ss')
        const {data}=await api.signUp(formInfo);
        console.log(data)
        dispatch({type:'Auth',data})
        navigate('/');
    } catch (error) {
        console.log(error)
    }

}