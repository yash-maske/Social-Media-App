import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbr/Topbar'
import './profile.css'

export default function Profile() {
    return (
        <>
       
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/post/image (9).jpg" alt="" className="profileCoverImg" />
                            <img src="assets/person/profile.jpg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profilInfoName'>Sofi Stark</h4>
                            <span className='profilInfoDesc'>Hello my friends !</span>
                        </div>

                    </div>
                    <div className="profileRightBottom">

                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
