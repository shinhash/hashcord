import client from "../client/client";
import { useState } from "react";

export const useQueryApi = ( url, parmas ) => {
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const apiAction = async () => {
        try{
            setLoading(true);
            url = 'http://localhost:8099' + url;
            const response = await client.post( url, parmas, {
                withCredentials: true,
            } );
            setData(response.data.resultData);
            if(response.status === 200){
                setData(response.data.resultData);
                setError(null);
            }else{
                setData(null);
                setError({
                    errorCode : response.data.errorCode,
                    errorDetail : response.data.errorDetail,
                });
            }
        }catch(err){
            setError(err);
            alert('네트워크 연결을 확인해주세요.');
        }finally{
            setLoading(false);
        }        
    }
    
    return {data, loading, error, apiAction};
}