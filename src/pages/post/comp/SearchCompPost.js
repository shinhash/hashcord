import { objectChange } from "../../component/common/utils/CommonUtils";

const searchCompPost = ({srchObjCnd, setSrchObjCnd, setSearchRefetch}) => {

    return (
        <div style={{height: '10%', textAlign: 'center'}}>
            <ruby>
                <div style={{marginRight: '10px'}}>
                    <div>
                        <span style={{marginRight: '5px'}}>제목</span>
                        <input 
                            type='text'
                            onChange={(event) => 
                                objectChange(
                                    event,
                                    setSrchObjCnd,
                                    'postTitle',
                                    event.target.value,
                                )
                            } 
                            value={srchObjCnd.postTitle || ''} 
                        />
                    </div>
                </div>
                <div>
                    <input 
                        type='button' 
                        value={'search'} 
                        onClick={() => {
                            setSearchRefetch(true);
                        }} 
                    />
                </div>
            </ruby>
        </div>
    );
}

export default searchCompPost;