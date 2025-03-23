
import PostSearch from './comp/PostSearch'
import PostList from './comp/PostList';
import { useEffect, useState } from 'react';
import { axiosQueryApi } from '../component/common/utils/CommonUtils';

function PostControllerPage(){
    const [ dataList, setDataList ] = useState([]);

    const searchInit = {
        postTitle : '',
    };
    const [ searchInfo, setSearchInfo ] = useState(searchInit);

    const searchClick = async (event) => {
        // eslint-disable-next-line
        const { dataList, errorCode, errorDetail } = await axiosQueryApi({
            urlInfo     : 'http://localhost:8099/hashcord/post/selectPostList',
            searchInfo  : searchInfo,
        });

        console.log('dataList : ', dataList);
        console.log('errorCode : ', errorCode);
        console.log('errorDetail : ', errorDetail);

        setDataList(dataList);
    };

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