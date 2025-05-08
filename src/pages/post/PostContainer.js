
import ChannelComp from './comp/ChannelComp';
import SearchCompPost from './comp/SearchCompPost'
import ListCompPost from './comp/ListCompPost';
import { useEffect, useState } from 'react';
import { useQueryApi } from '../component/common/hooks/useQueryApi';
import { isEmpty } from '../component/common/utils/CommonUtils';

const PostContainer = () => {
    const [ chanelCategoryList, setChanelCategoryList ] = useState([]);
    const [ dataList, setDataList ] = useState([]);
    const [ srchObjCnd, setSrchObjCnd ] = useState({});

    const [ searchRefetch, setSearchRefetch ] = useState(false);

    useEffect(() => {
        if(searchRefetch){
            setSearchRefetch(false);
            searchClick();
        }
        // eslint-disable-next-line
    }, [searchRefetch]);
    const searchClick = (event) => {
        selectPostApiAction(srchObjCnd);
    };

    useEffect(() => {
        selectChanelCategoryApiAction(srchObjCnd);
        selectPostApiAction(srchObjCnd);
        // eslint-disable-next-line
    }, []);

    /* 채널 카테고리 목록 조회 */
    const selectChanelCategoryUrl = '/hashcord/post/selectChanelCategoryList';
    const {
        data: selectChanelCategoryData,
        loading : selectChanelCategoryLoading,
        error : selectChanelCategoryError,
        apiAction : selectChanelCategoryApiAction,
    } = useQueryApi( selectChanelCategoryUrl, srchObjCnd );
    useEffect(() => {
        if(!selectChanelCategoryLoading){
            if(!isEmpty(selectChanelCategoryError)){
                return;
            }
            if(selectChanelCategoryData){
                setChanelCategoryList(selectChanelCategoryData);
            }
        }
    }, [selectChanelCategoryLoading, selectChanelCategoryError, selectChanelCategoryData]);

    /* 채널 게시글 목록 조회 */
    const selectPostUrl = '/hashcord/post/selectPostList';
    const {
        data: selectPostData,
        loading : selectPostLoading,
        error : selectPostError,
        apiAction : selectPostApiAction,
    } = useQueryApi( selectPostUrl, srchObjCnd );
    useEffect(() => {
        if(!selectPostLoading){
            if(!isEmpty(selectPostError)){
                return;
            }
            if(selectPostData){
                setDataList(selectPostData);
            }
        }
    }, [selectPostLoading, selectPostError, selectPostData]);

    return (
        <>
            <ChannelComp 
                srchObjCnd={srchObjCnd}
                setSrchObjCnd={setSrchObjCnd}
                setSearchRefetch={setSearchRefetch}
                chanelCategoryList={chanelCategoryList}
            />
            <ListCompPost 
                dataList={dataList} 
            />
            <SearchCompPost 
                srchObjCnd={srchObjCnd}
                setSrchObjCnd={setSrchObjCnd}
                setSearchRefetch={setSearchRefetch}
            />
        </>
    );
}

export default PostContainer;