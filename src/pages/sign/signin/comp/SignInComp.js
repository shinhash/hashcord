import { useEffect } from 'react';
import '../../../../css/sign/sign.css';
import { useQueryApi } from '../../../component/common/hooks/useQueryApi';
import { isEmpty, isValidation, objectChange } from "../../../component/common/utils/CommonUtils";
import { useNavigate } from 'react-router-dom';

const SignInComp = ({ userInfo, setUserInfo }) => {
    const navigate = useNavigate();
    const signInClick = () => {
        const parentDiv = 'signDiv';
        if(!isValidation(parentDiv)) return;
        signInApiAction();
    }

    /* 로그인 */
    const signInUrl = '/hashcord/sign/signIn';
    const {
        data: signInData,
        loading : signInLoading,
        error : signInError,
        apiAction : signInApiAction,
    } = useQueryApi( signInUrl, userInfo );
    useEffect(() => {
        if(!signInLoading){
            if(!isEmpty(signInError)){
                return;
            }
            console.log(signInData.userNm);
            let userInfo = {
                userId : signInData.userId,
                userNm : signInData.userNm,
            }
            sessionStorage.setItem('signUserInfo', JSON.stringify(userInfo));
            navigate('/post');
        }
        // eslint-disable-next-line
    }, [signInLoading, signInError, signInData]);

    return (
        <>
            <div className='signDiv'>
                <div className="pageTitle">
                    <h1>SIGN IN</h1>
                </div>
                <div className='signInputDiv'>
                    <input className='signInput'
                        type={'text'} 
                        name={'userId'} 
                        onChange={(event) => {
                            objectChange(
                                event, 
                                setUserInfo,
                                'userId',
                                event.target.value,
                            )
                        }}
                        value={userInfo.userId || ''} 
                        placeholder="아이디를 입력해주세요." 
                    />
                </div>
                <div className='signInputDiv'>
                    <input className='signInput'
                        type={'password'} 
                        name={'userPw'} 
                        onChange={(event) => {
                            objectChange(
                                event, 
                                setUserInfo,
                                'userPw',
                                event.target.value,
                            )
                        }}
                        value={userInfo.userPw || ''} 
                        placeholder="비밀번호를 입력해주세요." 
                    />
                </div>
            </div>
            <div className='signDiv'>
                <div className='signInputDiv'>
                    <input className='signBtn'
                        type={'button'} 
                        value={'SIGN IN'} 
                        onClick={signInClick} 
                    />
                </div>
            </div>
        </>
    );
}

export default SignInComp;