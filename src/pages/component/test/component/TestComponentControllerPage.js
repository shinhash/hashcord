import TestComponent from './comp/TestComponent';

export default function TestComponentControllerPage(){
    const userInfo = {
        userId:'testUser001',
        userPw:'1234',
        userPwRe:'1234',
        userEmail:'testUser001@gmail.com',
        userName:'테스트유저001',
    }

    return (
        <>
            <TestComponent
                userInfo={userInfo}
            />
        </>
    );
}