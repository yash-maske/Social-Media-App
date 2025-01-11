import { FaRss } from 'react-icons/fa'
import { MdOutlineMessage,MdVideoLibrary,MdGroups } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { BsQuestionSquareFill } from "react-icons/bs";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { FaCalendarDay } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import './sidebar.css'
import CloseFriend from '../closefriend/CloseFriend';
import {Users} from '../../dummyData'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FaRss className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <MdOutlineMessage className='sidebarIcon'/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <MdVideoLibrary className='sidebarIcon'/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <MdGroups className='sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <IoBookmarkSharp className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <BsQuestionSquareFill className='sidebarIcon'/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <PiSuitcaseSimpleFill className='sidebarIcon'/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <FaCalendarDay className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <RiGraduationCapFill className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="siderbarButton">Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
          {Users.map((u)=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
          
        </ul>
      </div>

    </div>
  )
}
