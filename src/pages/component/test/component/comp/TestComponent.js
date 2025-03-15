import { useState } from 'react';
import Table from './Table';
import InputTable from './InputTable';

function TestComponent({userInfo}){
    const [ tempObjList, setTempObjList ] = useState([]);
    const [arrObjValue, setArrObjValue] = useState({});

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
            <InputTable userInfo={userInfo} />

            <Table 
                tempObjList={tempObjList}
                setTempObjList={setTempObjList}
                arrObjValue={arrObjValue}
                setArrObjValue={setArrObjValue}
            />
        </>
    );
}

export default TestComponent;