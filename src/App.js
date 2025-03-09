import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [val, setVal] = useState('');
  const [td1, setTd1] = useState('');
  const [td2, setTd2] = useState('');
  const [td3, setTd3] = useState('');
  const [td4, setTd4] = useState('');
  const [userObj, setUserObj] = useState({});
  const [ddjArr, setDdjArr] = useState([]);

  const valOnChange = (e) => {
    console.log(e.target.name);
  }
  const submitBtn = (e) => {
    // console.log("ddjArr : ", ddjArr);
  }
  const tagNameUpper = (value) => {
    let originVal = value;
    let resultTagName = "";
    if(originVal.type === String){
      resultTagName = originVal.substring(0,1).toUpperCase() + originVal.substring(1);
    }else{
      resultTagName =  "";
    }
    return resultTagName;
  }

  const arrAddBtn = () => {
    console.log("ddjArr?.length : ", ddjArr?.length);
    setUserObj({id:`test${ddjArr?.length + 1}`, pw:"1234", name:`테스트유저${ddjArr?.length + 1}`, addr:"대전서구 갈마동"});
  }

  useEffect(() => {
    // setUserObj({id:`test${ddjArr?.length + 1}`, pw:"1234", name:`테스트유저${ddjArr?.length + 1}`, addr:"대전서구 갈마동"});
    console.log("use Effect userObj : ", userObj);
    console.log("use Effect ddjArr before : ", ddjArr);
    setDdjArr([...ddjArr, userObj]);
  }, [userObj]);

  useEffect(() => {
    console.log("use Effect ddjArr after : ", ddjArr);
  }, [ddjArr]);
  

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <input type="text" name="val" value={val} onChange={valOnChange} />
        <input type="button" value="submit" onClick={submitBtn} />
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" name="td1" value={td1} onChange={valOnChange} />
              <input type="text" name="td2" value={td2} onChange={valOnChange} />
              <input type="text" name="td3" value={td3} onChange={valOnChange} />
              <input type="text" name="td4" value={td4} onChange={valOnChange} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="arrAdd" onClick={arrAddBtn} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
