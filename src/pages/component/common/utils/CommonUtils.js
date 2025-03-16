
export function isValidation(parentDiv){
    const signDiv = document.getElementsByClassName(parentDiv)[0];
    const validateList = signDiv.getElementsByTagName('input');

    let userPwEvent = null;
    let userPwReEvent = null;
    let userEmailEvent = null;

    for(let arrNum=0; arrNum<validateList.length; arrNum++){
        const element = validateList[arrNum];
        const checkValue = element.value;

        // 공백입력 체크
        if(checkValue.replaceAll(' ', '') === ''){
            element.focus();
            alert(`${element.placeholder}`);
            return false;
        }
        if(element.name === 'userPw') userPwEvent = element;
        if(element.name === 'userPwRe') userPwReEvent = element;
        if(element.name === 'userEmail') userEmailEvent = element;
    }

    let isValidateResult = true;
    if(parentDiv === 'signDiv'){
        if(userPwEvent.value !== '' && !userPwReEvent) {
            isValidateResult = inputUserPwRegExp(userPwEvent);
        }else{
            if(userPwEvent.value !== '' &&  userPwReEvent.value !== '')
                isValidateResult = inputUserPwAndUserPwReIsEquals(userPwEvent, userPwReEvent);
            if(isValidateResult) isValidateResult = inputUserPwRegExp(userPwEvent);
            if(isValidateResult) isValidateResult = inputUserEmailRegExp(userEmailEvent);
        }
    }
    return isValidateResult;
}

export function inputOnChange({event, stateInfo, setStateInfo}){
    if(!inputOnChangeIsEmpty(event.target.value)) return;
    if(!inputOnChangeRegExp(event)) return;
    setStateInfo({
        ...stateInfo,
        [event.target.name] : event.target.value,
    });
}

export function inputOnChangeIsEmpty(value){
    // eslint-disable-next-line
    const emptyExp = /\s/g;

    if(emptyExp.test(value)){
        alert('공백은 사용불가합니다.');
        return false;
    }
    return true;
}

export function inputOnChangeRegExp(event){
    // eslint-disable-next-line
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

    let regExpResult = true;
    if(event.target.name !== 'userPw' 
        && event.target.name !== 'userPwRe' 
        && event.target.name !== 'userEmail'
    ){
        if(regExp.test(event.target.value)){
            alert('특수문자는 사용불가합니다.');
            regExpResult =  false;
        }
    }
    return regExpResult;
}

export function inputUserPwAndUserPwReIsEquals(userPwEvent, userPwReEvent){
    if(userPwEvent.value !== userPwReEvent.value){
        alert('입력하신 비밀번호가 일치하지 않습니다.');
        userPwReEvent.focus();
        return false;
    }
    return true;
}

export function inputUserPwRegExp(userPwEvent){
    // eslint-disable-next-line
    const regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

    if(!regExp.test(userPwEvent.value)){
        alert('비밀번호는 8자 이상 20자 이하여야하며 \n영어,숫자,특수문자가 포함되어야 합니다.');
        userPwEvent.focus();
        return false;
    }
    return true;
}

export function inputUserEmailRegExp(userEmailEvent){
    // eslint-disable-next-line
    const regExp = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    
    if(!regExp.test(userEmailEvent.value)){
        alert('이메일 형식이 아닙니다.');
        userEmailEvent.focus();
        return false;
    }
    return true;
}