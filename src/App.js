// import logo from './logo.svg';
import './App.css';
import TestComponent from './component/TestComponent';

function App() {
  const userInfo = {
    userId:'testUser001',
    userPw:'1234',
    userPwRe:'1234',
    userEmail:'testUser001@gmail.com',
    userName:'테스트유저001',
  }
  
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
      <TestComponent 
        userInfo={userInfo}
      />
    </div>
  );
}

export default App;
