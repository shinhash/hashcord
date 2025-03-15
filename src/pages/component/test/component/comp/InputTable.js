import { useEffect, useState } from 'react';

export default function InputTable({userInfo}){

    const [ val, setVal ] = useState('');
    const [ userId, setUserId ] = useState('');
    const [ userPw, setUserPw ] = useState('');
    const [ userPwRe, setUserPwRe ] = useState('');
    const [ userName, setUserName ] = useState('');
    const [ userEmail, setUserEmail ] = useState('');
    const [ ddjArr, setDdjArr ] = useState([]);

    const valOnChange = (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;
        if(targetName === 'userId') setUserId(targetValue);
        if(targetName === 'userPw') setUserPw(targetValue);
        if(targetName === 'userPwRe') setUserPwRe(targetValue);
        if(targetName === 'userName') setUserName(targetValue);
        if(targetName === 'userEmail') setUserEmail(targetValue);
        if(targetName === 'val') setVal(targetValue);
    }
    const submitBtn = (e) => {
        console.log("ddjArr : ", ddjArr);
    }

    const arrAddBtn = () => {
        
        setDdjArr(ddjArr => [
            ...ddjArr, 
            {
                id : ddjArr.length + 1, 
                userId : userId, 
                userPw : userPw, 
                userPwRe : userPwRe, 
                userName : userName, 
                userEmail : userEmail, 
            }
        ]);
        alert("행 추가!!!");
    }

    useEffect(() => {

    }, [ddjArr]);

    useEffect(() => {
        if(userInfo && userInfo !== null){
            setDdjArr(ddjArr => [
                ...ddjArr, 
                {
                    id : ddjArr.length + 1, 
                    userId : userInfo.userId, 
                    userPw : userInfo.userPw, 
                    userPwRe : userInfo.userPwRe, 
                    userName : userInfo.userName, 
                    userEmail : userInfo.userEmail, 
                }
            ]);
        }
    }, []);

    return(
        <>
            <div>
                <input type="text" name="val" value={val} onChange={valOnChange} />
                <input type="button" value="submit" onClick={submitBtn} />
            </div>
            <table>
                <tbody>
                <tr>
                    <td>ID : </td>
                    <td><input type="text" name="userId" value={userId} onChange={valOnChange} /></td>
                </tr>
                <tr>
                    <td>PW : </td>
                    <td><input type="password" name="userPw" value={userPw} onChange={valOnChange} /></td>
                </tr>
                <tr>
                    <td>PW Re : </td>
                    <td><input type="password" name="userPwRe" value={userPwRe} onChange={valOnChange} /></td>
                </tr>
                <tr>
                    <td>Name : </td>
                    <td><input type="text" name="userName" value={userName} onChange={valOnChange} /></td>
                </tr>
                <tr>
                    <td>Email : </td>
                    <td><input type="email" name="userEmail" value={userEmail} onChange={valOnChange} /></td>
                </tr>
                <tr>
                    <td>
                    <input type="button" value="arrAdd" onClick={arrAddBtn} />
                    </td>
                </tr>
                </tbody>
            </table>
            <div id='userList'>
                {ddjArr?.map(a => (
                <div key={a.id}>이름 : {a.userName}</div>
                ))}
            </div>
        </>
    );
}