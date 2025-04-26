import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BasePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/signIn');
    });
}

export default BasePage;