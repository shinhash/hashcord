export default function Table({tempObjList, setTempObjList, arrObjValue, setArrObjValue}){
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

        const trTag = document.createElement('tr');
        trTag.setAttribute('id', 'tempObjTr-'+(tempObjList.length+1));

        columns.forEach(column => {
            const tdTag = document.createElement('td');
            const inputTag = document.createElement('input');

            if(column === 'checkbox'){
                inputTag.setAttribute('type', 'checkbox');
                inputTag.setAttribute('class', 'inputCheck');
            }else{
                inputTag.setAttribute('type', 'text');
                inputTag.setAttribute('class', 'inputText');
            }

            inputTag.setAttribute('name', column);
            tdTag.appendChild(inputTag);
            trTag.appendChild(tdTag);
        });

        if(tbody.firstChild && tbody.firstChild.className === 'noDataTr'){
            tbody.removeChild(tbody.firstChild);
        }
        tbody.append(trTag);
        setTempObjList(tempObjList => [...tempObjList, tempObjList]);
    }

    const removeRow = (e) => {
        const tableDiv = document.getElementsByClassName('table-div')[0];
        const table = tableDiv.getElementsByTagName('table')[0];
        const tbody = table.getElementsByTagName('tbody')[0];

        let delTrCnt = 0;
        if(tbody.firstChild.className !== 'noDataTr'){
            for(let trRowNum=0; trRowNum < tbody.children.length; trRowNum++){
                const TR = tbody.children[trRowNum];
                const oldTrId = TR.id;
                const oldTrTag = document.getElementById(oldTrId);
                if(oldTrTag.getElementsByClassName('inputCheck')[0].checked){
                    delTrCnt++;
                }
            }
            if(delTrCnt > 0){
                // tbody 새로 만들기
                let trRowCnt = 0;
                const newTbody = document.createElement('tbody');
                for(let trRowNum=0; trRowNum < tbody.children.length; trRowNum++){
                    const TR = tbody.children[trRowNum];
                    const oldTrId = TR.id;
                    const oldTrTag = document.getElementById(oldTrId);
                    const delTrChecked = oldTrTag.getElementsByClassName('inputCheck')[0].checked;
    
                    if(!delTrChecked){
                        trRowCnt++;
                        const trTag = document.createElement('tr');
                        trTag.setAttribute('id', 'tempObjTr-'+trRowCnt);
    
                        const TD = tbody.children[trRowNum].children;
                        for(let tdRowNum=0; tdRowNum<TD.length; tdRowNum++){
                            const tdTag = document.createElement('td');
                            const inputTag = document.createElement('input');
    
                            const oldInputTag = TD[tdRowNum].children[0];
                            console.log('oldInputTag : ', oldInputTag);
                            inputTag.setAttribute('type', oldInputTag.type);
                            inputTag.setAttribute('name', oldInputTag.name);
                            inputTag.setAttribute('class', oldInputTag.className);
    
                            if(oldInputTag.type !== 'checkbox'){
                                inputTag.setAttribute('value', oldInputTag.value);
                            }
                            tdTag.appendChild(inputTag);
                            trTag.appendChild(tdTag);
                        }
                        newTbody.append(trTag);
                    }
                }
    
                tbody.remove();
                if(newTbody.children.length === 0){
                    const trTag = document.createElement('tr');
                    trTag.setAttribute('class', 'noDataTr');
    
                    const tdTag = document.createElement('td');
                    tdTag.colSpan = 5;
                    tdTag.innerText = 'No Data';
    
                    trTag.appendChild(tdTag);
                    newTbody.append(trTag);
                }
                table.append(newTbody);
            }
        }
    }
    return (
        <>
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