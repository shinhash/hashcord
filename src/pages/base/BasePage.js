import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BasePage(){
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/signIn');
    });
}

export default BasePage;