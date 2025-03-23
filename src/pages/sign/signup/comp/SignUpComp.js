import { useState } from "react";
import '../../../../css/sign/sign.css';
import { isValidation, inputOnChange } from "../../../component/common/utils/CommonUtils";

function SignUpComp(){
    const initState = { userId:'', userPw:'', userPwRe:'', userName:'', userEmail:'', };
    const [userInfo, setUserInfo] = useState(initState);

    function signUpClick(){
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
                        value={userInfo.userId} 
                        onChange={(event) => {
                            inputOnChange({
                                event, 
                                stateInfo       : userInfo, 
                                setStateInfo    : setUserInfo,
                            })
                        }}
                        placeholder="아이디를 입력해주세요." 
                    />
                </div>
                <div className='signInputDiv'>
                    <input className='signInput'
                        type={'password'} 
                        name={'userPw'} 
                        value={userInfo.userPw} 
                        onChange={(event) => {
                            inputOnChange({
                                event, 
                                stateInfo       : userInfo, 
                                setStateInfo    : setUserInfo,
                            })
                        }}
                        placeholder="비밀번호를 입력해주세요." 
                    />
                </div>
                <div className='signInputDiv'>
                    <input className='signInput'
                        type={'password'} 
                        name={'userPwRe'} 
                        value={userInfo.userPwRe} 
                        onChange={(event) => {
                            inputOnChange({
                                event, 
                                stateInfo       : userInfo, 
                                setStateInfo    : setUserInfo,
                            })
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
                            inputOnChange({
                                event, 
                                stateInfo       : userInfo, 
                                setStateInfo    : setUserInfo,
                            })
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
                            inputOnChange({
                                event, 
                                stateInfo       : userInfo, 
                                setStateInfo    : setUserInfo,
                            })
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