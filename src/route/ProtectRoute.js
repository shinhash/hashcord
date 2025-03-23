import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectRoute({children}){
    // 페이지 권한 체크
    // session 내부에 signSessionToken 이 존재하는지 확인

    // 임시로 signin 페이지로 navigate
    const navigate = useNavigate();
    useEffect(() => {
        // navigate('/signIn');
    });
    return children;
}

export default ProtectRoute;