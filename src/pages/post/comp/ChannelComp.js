import { isEmpty, objectChange } from "../../component/common/utils/CommonUtils";
import CHANEL_LOGO_NOJAM from '../../../cont/img/CHANEL_LOGO_NOJAM.png';

const ChannelComp = ({srchObjCnd, setSrchObjCnd, setSearchRefetch, chanelCategoryList}) => {
    return (
        <>
            <div style={{ display:'flex' }}>
                <div id="chanelLogo">
                    <img style={{width: '30px', height: '30px'}} alt="채널 로고" src={CHANEL_LOGO_NOJAM} />
                </div>
                <div id="chanelName">
                    {chanelCategoryList.length > 0 ? 
                        chanelCategoryList[0].chanelNm + ' 채널'
                        : 
                        ''
                    }
                </div>
                <div id="chanelBtn">
                    <input type="button" value={'구독'} />
                </div>
            </div>
            <div>
                {isEmpty(srchObjCnd.categoryId) ?
                    <span
                        style={{ width: '45px', marginRight: '5px', backgroundColor: 'darkGray', }}
                    >
                        <a 
                            href="#/"
                            onClick={(event) => {
                                event.preventDefault();
                                objectChange(
                                    event,
                                    setSrchObjCnd,
                                    'categoryId',
                                    '',
                                );
                                setSearchRefetch(true);
                            }}
                        >
                        {'전체'}</a></span>
                    : 
                    <span
                        style={{ width: '45px', marginRight: '5px', backgroundColor: 'lightGray', }}
                    >
                        <a 
                            href="#/"
                            onClick={(event) => {
                                event.preventDefault();
                                objectChange(
                                    event,
                                    setSrchObjCnd,
                                    'categoryId',
                                    '',
                                );
                                setSearchRefetch(true);
                            }}
                        >
                        {'전체'}</a></span>
                }
                {chanelCategoryList.length > 0 ? 
                    chanelCategoryList.map((data, rowNum) => {
                        let categoryCss = {};
                        if(srchObjCnd.categoryId === data.categoryId){
                            categoryCss = {
                                width: '45px',
                                marginRight: '5px',
                                backgroundColor: 'darkGray',
                            };
                        }else{
                            categoryCss = {
                                width: '45px',
                                marginRight: '5px',
                                backgroundColor: 'lightGray',
                            };
                        }
                        return(
                            <span
                                key={data.categoryId}
                                style={categoryCss}
                            >
                                <a 
                                    href="#/"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        objectChange(
                                            event,
                                            setSrchObjCnd,
                                            'categoryId',
                                            data.categoryId,
                                        );
                                        setSearchRefetch(true);
                                    }}
                                >
                                {data.categoryNm}</a>
                            </span>
                        );
                    })
                    : 
                    ''
                }
            </div>
        </>
    );
}

export default ChannelComp;