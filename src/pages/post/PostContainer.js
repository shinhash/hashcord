
import SearchCompPost from './comp/SearchCompPost'
import ListCompPost from './comp/ListCompPost';
import { useEffect, useState } from 'react';
import { useQueryApi } from '../component/common/hooks/useQueryApi';
import { isEmpty } from '../component/common/utils/CommonUtils';

const PostContainer = () => {
    const [ dataList, setDataList ] = useState([]);
    const [ srchObjCnd, setSrchObjCnd ] = useState({});

    const searchClick = (event) => {
        selectApiAction(srchObjCnd);
    };

    const selectUrl = 'http://localhost:8099/hashcord/post/selectPostList';
    const {
        data: selectData,
        loading : selectLoading,
        error : selectError,
        apiAction : selectApiAction,
    } = useQueryApi( selectUrl, srchObjCnd );

    useEffect(() => {
        if(!selectLoading){
            if(!isEmpty(selectError)){
                return;
            }
            if(selectData){
                setDataList(selectData);
            }
        }
    }, [selectLoading, selectError, selectData]);

    return (
        <div>
            <SearchCompPost 
                srchObjCnd={srchObjCnd}
                setSrchObjCnd={setSrchObjCnd}
                searchClick={searchClick}
            />
            <ListCompPost dataList={dataList} />
        </div>
    );
}

export default PostContainer;