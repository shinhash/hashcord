import { useState } from "react";
import '../../../../css/sign/sign.css';
import { isValidation, objectChange } from "../../../component/common/utils/CommonUtils";

const SignUpComp = () => {
    const initState = { userId:'', userPw:'', userPwRe:'', userName:'', userEmail:'', };
    const [userInfo, setUserInfo] = useState(initState);

    const signUpClick = () => {
        const parentDiv = 'signDiv';
        if(!isValidation(parentDiv)) return;

        console.log('userInfo : ', userInfo);
    }    
    
    return (
        <>
            <div className='signDiv'>
                <div className="pageTitle">
                    <h1>SIGN UP</h1>
                </div>
                <div className='signInputDiv'>
                    <input className='signInput'
                        type={'text'} 
                        name={'userId'} 
                        onChange={(event) => {
                            objectChange(
                                event, 
                                setUserInfo,
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
                            )
                        }}
                        value={userInfo.userPw || ''}
                        placeholder="비밀번호를 입력해주세요." 
                    />
                </div>
                <div className='signInputDiv'>
                    <input className='signInput'
                        type={'password'} 
                        name={'userPwRe'} 
                        value={userInfo.userPwRe} 
                        onChange={(event) => {
                            objectChange(
                                event, 
                                setUserInfo,
                            )
                        }}
                        placeholder="비밀번호를 입력해주세요." 
                    />
                </div>
                <div className='signInputDiv'>
                    <input className='signInput'
                        type={'text'} 
                        name={'userName'} 
                        value={userInfo.userName} 
                        onChange={(event) => {
                            objectChange(
                                event, 
                                setUserInfo,
                            )
                        }}
                        placeholder="이름을 입력해주세요." 
                    />
                </div>
                <div className='signInputDiv'>
                    <input className='signInput'
                        type={'text'} 
                        name={'userEmail'} 
                        value={userInfo.userEmail} 
                        onChange={(event) => {
                            objectChange(
                                event, 
                                setUserInfo,
                            )
                        }}
                        placeholder="이메일을 입력해주세요." 
                    />
                </div>
            </div>
            <div className='signDiv'>
                <div className='signInputDiv'>
                    <input className='signBtn'
                        type={'button'} 
                        value={'SIGN UP'} 
                        onClick={signUpClick} 
                    />
                </div>
            </div>
        </>
    );
}

export default SignUpComp;