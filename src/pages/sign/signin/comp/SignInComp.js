import '../../../../css/sign/sign.css';
import { isValidation, objectChange } from "../../../component/common/utils/CommonUtils";

const SignInComp = ({ userInfo, setUserInfo }) => {
    const signInClick = () => {
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