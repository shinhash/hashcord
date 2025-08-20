import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useQueryApi } from '../../component/common/hooks/useQueryApi';
import DetailCompPost from '../comp/DetailCompPost';
import { customModalStyles, isEmpty } from '../../component/common/utils/CommonUtils';

const ListCompPost = ({dataList}) => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ srchObjCnd, setSrchObjCnd ] = useState({});
    const [ params, setParams ] = useState({});
    
    const viewPostDetail = (postId) => {
        setSrchObjCnd({postId: postId});
    };
    useEffect(() => {
        if(modalOpen){
            selectPostDetailApiAction(srchObjCnd);
        }
        // eslint-disable-next-line
    }, [modalOpen])

    /* 채널 게시글 상세 조회 */
    const selectPostDetailUrl = '/hashcord/post/selectPostDetail';
    const {
        data: selectPostDetailData,
        loading : selectPostDetailLoading,
        error : selectPostDetailError,
        apiAction : selectPostDetailApiAction,
    } = useQueryApi( selectPostDetailUrl, srchObjCnd );
    useEffect(() => {
        if(!selectPostDetailLoading){
            if(!isEmpty(selectPostDetailError)){
                return;
            }
            console.log('selectPostDetailData', selectPostDetailData);
            if(selectPostDetailData){
                setParams(selectPostDetailData);
            }
        }
    }, [selectPostDetailLoading, selectPostDetailError, selectPostDetailData]);

    return (
        <>
            <div style={{textAlign: '-webkit-left'}}>
                <table border={{}} style={{width: '80%'}}>
                    <thead>
                        <tr>
                            <th style={{width: '5%'}}>번호</th>
                            <th style={{width: '50%'}}>제목</th>
                            <th style={{width: '10%'}}>작성자</th>
                            <th style={{width: '12%'}}>작성일</th>
                            <th style={{width: '10%'}}>조회수</th>
                            <th style={{width: '10%'}}>추천</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataList?.length > 0 ? 
                            (
                                dataList.map((data, rowNum) => {
                                    return (
                                    <tr 
                                        key={data.postId} 
                                        onClick={() => {
                                            viewPostDetail(data.postId);
                                            setModalOpen(true);
                                        }}
                                    >
                                        <td>{rowNum + 1}</td>
                                        <td>{data.postTitle}</td>
                                        <td>{data.postRegNm}</td>
                                        <td>{data.postRegDt}</td>
                                        <td>{data.postViewCnt}</td>
                                        <td>{data.postLikeCnt}</td>
                                    </tr>
                                    );
                                })
                            )
                            : 
                            (
                                <tr>
                                    <td colSpan={6}>No Data...</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={() => {setModalOpen(false)}}
                style={customModalStyles}
                ariaHideApp={false}
                contentLabel="Pop up Message"
            >
                <DetailCompPost params={params} />
            </Modal>
        </>
    );
}

export default ListCompPost;