import './rightbar.css'
import {Users} from '../../dummyData';
import Online from '../onlie/Online';
export default function Rightbar({profile}) {
  const HomeRightbar = () =>{
    return (
      <>
      <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other</b> friend have a birthday today.</span>
        </div>

        <img src="/assets/abc.jpeg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user = {u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return(
      <>
      
      <h4 className='rightbarTitle'>User Information Title</h4>
      <div className="righbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City :</span>
          <span className="rightbarInfoValue">New York</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From :</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship :</span>
          <span className="rightbarInfoValue">Single</span>
        </div>

     
      </div>

      <h4 className='rightbarTitle'>User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/image (1).jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/image (2).jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Pola Foster</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/image (3).jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Yash Maske</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/image (4).jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Sarah Ahmed</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/image (5).jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Michael Brown</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/image (6).jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Emily Clarkr</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/image (7).jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">David Warner</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/image (8).jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Sophia Turner</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/image (9).jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">James Wilson</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/image (10).jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Olivia Martine</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
