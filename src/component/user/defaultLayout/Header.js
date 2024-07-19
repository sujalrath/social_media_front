import React, { useState } from "react";
import Index from "../../../container/Index";
import { Avatar, Skeleton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PagesIndex from "../../../container/PagesIndex";
import { Search } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import NotificationList from "../../../container/user/pages/notification/NotificationList";
const Header = (props) => {
  const dispatch = Index.useDispatch()
  const navigate = Index.useNavigate();
  const user = Index.useSelector((state) => state.user.userData)

  const [notificationModel,setOpenNotificationModel]=useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenNotification=()=>{
setOpenNotificationModel(true)
  }
  const handleCloseNotification=()=>{
    setOpenNotificationModel(false)
      }
  return (
    <>
      <Index.Box className="user-header-main">
        <Index.Box className="user-header-left-main">
          <Index.Box className="user-header-logo-main">

            <img
              src={PagesIndex.Png.logoImage}
              className="user-sidebar-logo"
              alt="logo"
            />
          </Index.Box>
        </Index.Box>
        <Index.Box className="user-header-center-main">
          
        </Index.Box>
        <Index.Box className="user-header-right-main">
         {!props.open ?( 
          <>
          <Index.Button className="admin-header-icon-box"
          onClick={handleOpenNotification}
          >
            <img
              src={PagesIndex.Svg.notification}
              className="admin-header-icon"
              alt="dashboard logo"
            ></img>
          </Index.Button>
       
          </>):""}
          <Index.IconButton onClick={handleClick}>
          {user.profile? 
                <img  
                className="header-img"
                src={`${PagesIndex.IMAGE_ENDPOINT}${user?.profile}`}
/>
              :<Index.Avatar />}
          </Index.IconButton>
        </Index.Box>
      </Index.Box>
      <Index.Menu
        className="drop-header-menu"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
  <Index.MenuItem onClick={() => {
         
          navigate("/user/profile")
          setAnchorEl(null)
        }} className='drop-header-menuitem'>  Profile</Index.MenuItem>
        <Index.MenuItem onClick={() => {
          dispatch(PagesIndex.userLogout())
          navigate("/")
        }} className='drop-header-menuitem'>  Sign Out</Index.MenuItem>
      </Index.Menu>
      {notificationModel && (
        <NotificationList  notificationModel={notificationModel} handleCloseNotification={handleCloseNotification}/>
      )}
    </>
  );
};

export default Header;
