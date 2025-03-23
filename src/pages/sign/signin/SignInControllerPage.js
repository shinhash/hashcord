import { useState } from "react";
import SignInComp from "./comp/SignInComp";

function SignInControllerPage(){
    const initState = { userId:'', userPw:'', };
    const [userInfo, setUserInfo] = useState(initState);
    
    return (
        <>
            <SignInComp 
                userInfo={userInfo} 
                setUserInfo={setUserInfo}  
            />
        </>
    );
}

export default SignInControllerPage;