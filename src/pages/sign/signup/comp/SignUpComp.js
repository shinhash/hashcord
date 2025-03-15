import { useState } from "react";
import '../../../../css/sign/sign.css';

export default function SignUpComp(){
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userPwRe, setUserPwRe] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    
    const inputValueChange = (name, value) => {
        if(!inputOnChangeValidation(value)){
            return;
        }
        switch(name){
            case 'userId' : 
                setUserId(value); 
            break;
            case 'userPw' : 
                setUserPw(value); 
            break;
            case 'userPwRe' : 
                setUserPwRe(value); 
            break;
            case 'userName' : 
                setUserName(value); 
            break;
            case 'userEmail' : 
                setUserEmail(value); 
            break;
            default:break;
        }
    }

    function signUpClick(){
        if(!isValidation) return;

        const userInfo = {
            userId      : userId,
            userPw      : userPw,
            userName    : userName,
            userEmail   : userEmail,
        }
        console.log('userInfo : ', userInfo);
    }

    function isValidation(){
        const signUpDiv = document.getElementsByClassName('signUpDiv')[0];
        const validateList = signUpDiv.getElementsByTagName('input');

        let inputUserPw = '';
        let inputUserPwRe = '';
        for(let arrNum=0; arrNum<validateList.length; arrNum++){
            const element = validateList[arrNum];
            const checkValue = element.value;

            // 공백입력 체크
            if(checkValue.replaceAll(' ', '') === ''){
                element.focus();
                alert(`${element.placeholder}`);
                return false;
            }
            if(element.name === 'userPw') inputUserPw = element.value;
            if(element.name === 'userPwRe') inputUserPwRe = element.value;
        }
        // 비밀번호 입력값 일치여부
        if(inputUserPw !== inputUserPwRe){
            alert('입력하신 비밀번호가 일치하지 않습니다.');
            return false;
        }
    }

    function inputOnChangeValidation(value){
        // eslint-disable-next-line
        const emptyExp = /\s/g;
        // eslint-disable-next-line
        const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

        if(emptyExp.test(value)){
            alert('공백은 사용불가합니다.');
            return false;
        }else if(regExp.test(value)){
            alert('특수문자는 사용불가합니다.');
            return false;
        }else{
            return true;
        }
    }
    
    
    return (
        <>
            <div className='signUpDiv'>
                <div className="pageTitle">
                    <h1>SIGN UP</h1>
                </div>
                <div className='signUpInputDiv'>
                    <input className='signUpInput'
                        type={'text'} 
                        name={'userId'} 
                        value={userId} 
                        onChange={(e) => {inputValueChange(e.target.name, e.target.value)}} 
                        placeholder="아이디를 입력해주세요." 
                    />
                </div>
                <div className='signUpInputDiv'>
                    <input className='signUpInput'
                        type={'password'} 
                        name={'userPw'} 
                        value={userPw} 
                        onChange={(e) => {inputValueChange(e.target.name, e.target.value)}} 
                        placeholder="비밀번호를 입력해주세요." 
                    />
                </div>
                <div className='signUpInputDiv'>
                    <input className='signUpInput'
                        type={'password'} 
                        name={'userPwRe'} 
                        value={userPwRe} 
                        onChange={(e) => {inputValueChange(e.target.name, e.target.value)}} 
                        placeholder="비밀번호를 입력해주세요." 
                    />
                </div>
                <div className='signUpInputDiv'>
                    <input className='signUpInput'
                        type={'text'} 
                        name={'userName'} 
                        value={userName} 
                        onChange={(e) => {inputValueChange(e.target.name, e.target.value)}} 
                        placeholder="이름을 입력해주세요." 
                    />
                </div>
                <div className='signUpInputDiv'>
                    <input className='signUpInput'
                        type={'text'} 
                        name={'userEmail'} 
                        value={userEmail} 
                        onChange={(e) => {inputValueChange(e.target.name, e.target.value)}} 
                        placeholder="이메일을 입력해주세요." 
                    />
                </div>
            </div>
            <div className='signUpDiv'>
                <div className='signUpInputDiv'>
                    <input className='signUpBtn'
                        type={'button'} 
                        value={'SIGN UP'} 
                        onClick={signUpClick} 
                    />
                </div>
            </div>
        </>
    );
}