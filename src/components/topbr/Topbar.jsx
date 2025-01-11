import { FaBell } from 'react-icons/fa6'
import './topbar.css'
import { FaSearch,FaStackExchange, FaUser } from 'react-icons/fa'
export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">
          Lamasocial
        </span>
      </div>
      <div className="topbarCenter"> 
        <div className="searchbar">
        <FaSearch className='searchIcon'/>
        <input placeholder='Search for friends ,post or video' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaUser/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FaStackExchange/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <FaBell/>
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
      </div>
      <img src="/assets/person/profile.jpg" alt="" className="topbarImg" />
    </div>
  )
}

