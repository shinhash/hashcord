
function PostSearch({searchInfo, setSearchInfo, searchClick}){

    return (
        <div style={{height: '10%', textAlign: 'center'}}>
            <ruby>
                <div style={{marginRight: '10px'}}>
                    <div>
                        <span style={{marginRight: '5px'}}>제목</span>
                        <input type='text' valeu={searchInfo.postTitle} />
                    </div>
                </div>
                <div>
                    <input type='button' value={'search'} onClick={searchClick} />
                </div>
            </ruby>
        </div>
    );
}

export default PostSearch;