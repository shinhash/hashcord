import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../pages/base/layout/BaseLayout";
// import ProtectRoute from './ProtectRoute';
import SignIn from '../pages/sign/signin/SignInControllerPage';
import SignUp from '../pages/sign/signup/SignUpControllerPage';
import BasePage from '../pages/base/BasePage';
import PostContainer from "../pages/post/PostContainer";
// import Chat from '../pages/chat/ChatControllerPage'
// import TestComponentControllerPage from "../pages/component/test/component/TestComponentControllerPage";

const Router = createBrowserRouter([
    {
        path    : '',
        children: [
            {
                path    : '',
                element : <BasePage />
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
                path    : '/post',
                element : <BaseLayout><PostContainer /></BaseLayout>
            },
            // {
            //     path    : '/chat',
            //     element : <ProtectRoute><Chat /></ProtectRoute>
            // },
            // {
            //     path    : '/testComponent',
            //     element : <TestComponentControllerPage />
            // },
        ],
    },
]);

export default Router;