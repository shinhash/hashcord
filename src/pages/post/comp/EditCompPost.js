import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { customModalStyles, isEmpty, objectChange } from '../../component/common/utils/CommonUtils';
import { useQueryApi } from '../../component/common/hooks/useQueryApi';

const EditCompPost = ({ editTypeInfo, chanelCategoryList, setSearchRefetch }) => {

    const [ modalOpen, setModalOpen ] = useState(false);
    const postInit = { categoryId:'', postTitle:'', postCont:'', editType:editTypeInfo };
    const [postInfo, setPostInfo] = useState(postInit);

    useEffect(() => {
        if(!modalOpen){
            setPostInfo({});
        }else{
            setPostInfo({...postInfo, editType:editTypeInfo});
        }
        // eslint-disable-next-line
    }, [modalOpen]);

    const fnPostSaveClick = () => {
        if(isEmpty(postInfo.categoryId)){
            return alert('카테고리 선택 필요!');
        }
        if(isEmpty(postInfo.postTitle)){
            return alert('제목 입력 필요!');
        }
        if(isEmpty(postInfo.postCont)){
            return alert('내용 입력 필요!');
        }
        savePostInfoApiAction();
    }

    /* 채널 게시글 저장 */
    const savePostInfoUrl = '/hashcord/post/savePostInfo';
    const {
        data: savePostInfoData,
        loading : savePostInfoLoading,
        error : savePostInfoError,
        apiAction : savePostInfoApiAction,
    } = useQueryApi( savePostInfoUrl, postInfo );
    useEffect(() => {
        if(!savePostInfoLoading){
            if(!isEmpty(savePostInfoError)){
                return;
            }
            console.log('savePostInfoData', savePostInfoData);
            if(savePostInfoData){
                setModalOpen(false);
                setSearchRefetch(true);
            }
        }
    }, [savePostInfoLoading, savePostInfoError, savePostInfoData, setSearchRefetch]);

    return (
        <>
            <div id={'post_add'} style={{width:'80%'}}>
                <div style={{float:'inline-end'}}>
                    <input 
                        type='button' 
                        value={'작성'} 
                        onClick={()=>{
                            setModalOpen(true);
                        }}
                    />
                </div>
            </div>

            <Modal
                isOpen={modalOpen}
                onRequestClose={() => {setModalOpen(false)}}
                style={customModalStyles}
                ariaHideApp={false}
                contentLabel="Pop up Message"
            >
                <div>
                    <div id='post_category'>
                        <select 
                            onChange={(event) => {
                                objectChange(
                                    event, 
                                    setPostInfo,
                                    'categoryId',
                                    event.target.value,
                                )
                            }}
                            defaultValue={''}
                        >
                            <option value={''}>{'선택'}</option>
                            {
                                chanelCategoryList?.length > 0 ?
                                (
                                    chanelCategoryList.map((data, rowNum) => {
                                    return (
                                        <option key={data.categoryId} value={data.categoryId}>{data.categoryNm}</option>
                                    );
                                })
                                )
                                :
                                (<option>No Data...</option>)
                            }
                        </select>
                    </div>
                    <div id='post_edit_title'>
                        <input 
                            type='text' 
                            name='postTitle' 
                            value={postInfo.postTitle||''} 
                            onChange={(event) => {
                                objectChange(
                                    event, 
                                    setPostInfo,
                                    'postTitle',
                                    event.target.value,
                                )
                            }}
                        />
                    </div>
                    <div id='post_edit_cont'>
                        <textarea 
                            name='postCont' 
                            value={postInfo.postCont||''} 
                            onChange={(event) => {
                                objectChange(
                                    event, 
                                    setPostInfo,
                                    'postCont',
                                    event.target.value,
                                )
                            }}
                        />
                    </div>
                    <div id='post_save'>
                        <input 
                            type='button' 
                            name='postTitle' 
                            value={'저장'} 
                            onClick={() => {
                                fnPostSaveClick();
                            }}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default EditCompPost;