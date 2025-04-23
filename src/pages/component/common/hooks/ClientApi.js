import axios from "axios";

export const useQueryApi = ( url, srchObjCnd ) => {
    let data;
    let loading = false;
    let error;
    let resporse;

    const urlInfo = url;
    const params = srchObjCnd;

    axios.defaults.withCredentials = true; // withCredentials 전역 설정

    // const client = axios.create({
    //     baseURL: url,
    //     headers:{
    //         "Content-Type": "application/json",
    //     }
    // });

    const apiAction = async () => {
        try{
            await axios.post(urlInfo, params)
            .then((resp) => {
                loading = true;
                resporse = resp;
            })
            .catch((err) => {
                error = err;
            })
            .finally(() => {
                loading = false;
            });
        }catch(err){
            console.log('error : ', err);
        }
        
    }
    
    return {data, loading, error, apiAction};
}