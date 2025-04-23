
import PostSearch from './comp/PostSearch'
import PostList from './comp/PostList';
import { useEffect, useState } from 'react';
import { useQueryApi } from '../component/common/hooks/ClientApi';

function PostControllerPage(){
    const [ dataList, setDataList ] = useState([]);

    const searchInit = {
        postTitle : '',
    };
    const [ searchInfo, setSearchInfo ] = useState(searchInit);

    const searchClick = async (event) => {
        // console.log('searchInfo : ', searchInfo);
        // eslint-disable-next-line
        // const { resultDataInfo, errorCode, errorDetail } = await axiosQueryApi({
        //     urlInfo     : 'http://localhost:8099/hashcord/post/selectPostList',
        //     searchInfo  : searchInfo,
        // });

        // console.log('dataList : ', dataList);
        // console.log('errorCode : ', errorCode);
        // console.log('errorDetail : ', errorDetail);

        setDataList(dataList);
        selectApiAction({test:'test'});
    };

    const url = 'http://localhost:8099/hashcord/post/selectPostList';
    const srchObjCnd = {};
    const {
        data: selectData,
        loading : selectLoading,
        error : selectError,
        apiAction : selectApiAction,
    } = useQueryApi( url, srchObjCnd );

    useEffect(() => {
        if(!selectLoading){
            if(selectError){
                return;
            }
            if(selectData){
                console.log('selectData : ', selectData);
            }
        }
    }, [selectData]);

    return (
        <div>
            <PostSearch 
                searchInfo={searchInfo} 
                setSearchInfo={setSearchInfo} 
                searchClick={searchClick} />
            <PostList dataList={dataList} />
        </div>
    );
}

export default PostControllerPage;