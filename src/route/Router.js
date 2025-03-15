import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import SignIn from '../pages/sign/signin/SignInControllerPage';
import SignUp from '../pages/sign/signup/SignUpControllerPage';
import TestComponentControllerPage from "../pages/component/test/component/TestComponentControllerPage";
import ProtectRoute from "./ProtectRoute";

const Router = createBrowserRouter([
    {
        path    : '',
        element : <App />,
        children: [
            {
                path    : '/testComponent',
                element : <TestComponentControllerPage />
            },
            {
                path    : '/signIn',
                element : <SignIn />
            },
            {
                path    : '/signUp',
                element : <SignUp />
            },
        ],
    },
]);

export default Router;