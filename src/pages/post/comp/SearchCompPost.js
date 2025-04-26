import { objectChange } from "../../component/common/utils/CommonUtils";

const searchCompPost = ({srchObjCnd, setSrchObjCnd, searchClick}) => {

    return (
        <div style={{height: '10%', textAlign: 'center'}}>
            <ruby>
                <div style={{marginRight: '10px'}}>
                    <div>
                        <span style={{marginRight: '5px'}}>제목</span>
                        <input 
                            type='text' 
                            name={'postTitle'}
                            onChange={(event) => 
                                objectChange(
                                    event,
                                    setSrchObjCnd,
                                )
                            } 
                            value={srchObjCnd.postTitle || ''} 
                        />
                    </div>
                </div>
                <div>
                    <input type='button' value={'search'} onClick={searchClick} />
                </div>
            </ruby>
        </div>
    );
}

export default searchCompPost;