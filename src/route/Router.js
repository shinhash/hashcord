import { createBrowserRouter } from "react-router-dom";
import SignIn from '../pages/sign/signin/SignInControllerPage';
import SignUp from '../pages/sign/signup/SignUpControllerPage';
import TestComponentControllerPage from "../pages/component/test/component/TestComponentControllerPage";
import ProtectRoute from './ProtectRoute';
import BasePage from '../pages/base/BasePage';
import Chat from '../pages/chat/ChatControllerPage'
import PostControllerPage from "../pages/post/PostControllerPage";

const Router = createBrowserRouter([
    {
        path    : '',
        children: [
            {
                path    : '',
                element : <BasePage />
            },
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
            {
                path    : '/chat',
                element : <ProtectRoute><Chat /></ProtectRoute>
            },
            {
                path    : '/post',
                element : <PostControllerPage />
            },
        ],
    },
]);

export default Router;