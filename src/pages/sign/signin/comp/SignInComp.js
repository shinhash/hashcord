import { useState } from "react";
import '../../../../css/sign/sign.css';
import { isValidation, inputOnChange } from "../../../component/common/utils/CommonUtils";

export default function SignInComp(){
    const initState = { userId:'', userPw:'', };
    const [userInfo, setUserInfo] = useState(initState);

    function signInClick(){
        const parentDiv = 'signDiv';
        if(!isValidation(parentDiv)) return;

        console.log('userInfo : ', userInfo);
    }

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