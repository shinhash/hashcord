import { useEffect, useState } from 'react';

function TestComponent({userInfo}){

    const [ val, setVal ] = useState('');
    const [ userId, setUserId ] = useState('');
    const [ userPw, setUserPw ] = useState('');
    const [ userPwRe, setUserPwRe ] = useState('');
    const [ userName, setUserName ] = useState('');
    const [ userEmail, setUserEmail ] = useState('');
    const [ ddjArr, setDdjArr ] = useState([]);
    const [ tempObjList, setTempObjList ] = useState([]);

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

    const columns = [
        'checkbox', 
        'rowNum', 
        'userId', 
        'userName', 
        'userEmail',
    ];

    const AddRow = (e) => {
        const tableDiv = document.getElementsByClassName('table-div')[0];
        const table = tableDiv.getElementsByTagName('table')[0];
        const tbody = table.getElementsByTagName('tbody')[0];

        const tr = document.createElement('tr');
        tr.setAttribute('id', 'tempObjTr-'+(tempObjList.length+1));

        columns.forEach(column => {
            const td = document.createElement('td');
            const inputText = document.createElement('input');

            if(column === 'checkbox'){
                inputText.setAttribute('type', 'checkbox');
                inputText.setAttribute('class', 'inputCheck');
            }else{
                inputText.setAttribute('type', 'text');
                inputText.setAttribute('class', 'inputText');
            }

            inputText.setAttribute('name', column);
            td.appendChild(inputText);
            tr.appendChild(td);
        });

        if(tbody.firstChild.className === 'noDataTr'){
            tbody.removeChild(tbody.firstChild);
        }
        tbody.append(tr);
        setTempObjList(tempObjList => [...tempObjList, tempObjList]);
    }

    const removeRow = (e) => {
        const tableDiv = document.getElementsByClassName('table-div')[0];
        const table = tableDiv.getElementsByTagName('table')[0];
        const tbody = table.getElementsByTagName('tbody')[0];

        const tr = document.createElement('tr');
        tr.setAttribute('id', 'tempObjTr-'+(tempObjList.length+1));

        console.log('tbody.children : ', tbody.children);

        for(let rowNum=0; rowNum < tbody.children.length; rowNum++){
            let trId = tbody.children[rowNum].id;
            let trTemp = document.getElementById(trId);
            let delTrChecked = trTemp.getElementsByClassName('inputCheck')[0].checked;

            // if(!delTrChecked){
                
            // }
        }
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

    useEffect(() => {

    }, [tempObjList]);

    /** useEffect의 작동방식 
     * 
     * 컴포넌트가 mount 되었을때(초기 랜더링) 실행
     * useEffect(() => {}, [])
     * 
     * 랜더링 될때마다 실행
     * useEffect(() => {})
     * 
     * tempState state값이 update 될때 실행
     * useEffect(() => {}, tempState)
     */

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
            
            <div className='table-row'>
                <div className='table-btn-div'>
                    <input type='button' value={'행추가'} onClick={AddRow} />
                    <input type='button' value={'행삭제'} onClick={removeRow} />
                </div>
                <div className='table-div'>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th style={{width: '50px'}}></th>
                                <th style={{width: '50px'}}>순번</th>
                                <th style={{width: '100px'}}>ID</th>
                                <th style={{width: '300px'}}>NAME</th>
                                <th style={{width: '500px'}}>EMAIL</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* {
                            !tempObjList
                            && tempObjList?.size ? 
                            tempObjList.map((tempObj, rowNum) => {
                                <tr id={'tempObjTr-'+(tempObjList.size+1)}>
                                    <td><input type='checkbox' /></td>
                                    <td><input type='text' name='rowNum' /></td>
                                    <td><input type='text' name='userId' /></td>
                                    <td><input type='text' name='userName' /></td>
                                    <td><input type='text' name='userEmail' /></td>
                                </tr>
                            })
                        : 
                            <tr>
                                <td colSpan={5}>No Data</td>
                            </tr>
                        } */}
                        <tr className='noDataTr'>
                            <td colSpan={5}>No Data</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default TestComponent;