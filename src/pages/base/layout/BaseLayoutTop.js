import siteLogo from '../../../cont/img/siteLogo.svg';
import siteMyInfo from '../../../cont/img/siteMyInfo.png';

const BaseLayoutTop = () => {
    const userInfo = JSON.parse(sessionStorage.getItem('signUserInfo'));
    return(
        <div style={{ display:'flex', backgroundColor: '#3d414d' }}>
            <div id="siteLogo">
                <img style={{ width: '50px', height: '50px' }} alt="siteLogo" src={siteLogo} />
            </div>
            <div id="siteSearch" style={{width: '30%', paddingTop: '14px'}}>
                <input style={{ width: '95%', height: '25px', border: 'none' }} type='text' />
            </div>
            <div style={{ width: '70%' }}></div>
            <div id="siteMyInfo" style={{ width: '10%', display: 'flex', flexDirection: 'row', paddingTop: '14px' }}>
                <span>{userInfo ?? ''}</span>
                <img style={{ width: '25px', height: '25px' }} alt="siteMyInfo" src={siteMyInfo} />
            </div>
        </div>
    );
}

export default BaseLayoutTop;