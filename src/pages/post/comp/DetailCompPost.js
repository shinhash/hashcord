const DetailCompPost = ({params}) => {
    return (
        <>
            <div>{params.postTitle}</div>
            <div>{params.postRegId}</div>
            <div>{params.postContent}</div>
        </>
    );
}

export default DetailCompPost;