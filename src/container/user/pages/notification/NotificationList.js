import React, { useEffect, useState } from 'react'
import Index from '../../../Index'
import PagesIndex from '../../../PagesIndex';
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
  };
const NotificationList = ({notificationModel,handleCloseNotification}) => {
    const dispatch = Index.useDispatch()
    const user = Index.useSelector((state) => state.user.userData)
  
    const [notificationList, setNotificationList] = useState([])

    const getAllNotifications = async () => {
        const response = await dispatch(PagesIndex.getAllNotifications({ userId: user.id }))
        if (response?.payload?.status === 200) {
          setNotificationList(response.payload.data)
        }
      }
      useEffect(() => {
        getAllNotifications()
      }, [])
    return (
    <Index.Modal
    open={notificationModel}
    onClose={handleCloseNotification}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    className="modal-add modal"
  >
 <Index.Box sx={style} className="add-modal-inner-main modal-inner ">
 <Index.Card className='user-sidebar-main-card'>
            <Index.CardContent>
              <Index.Typography variant="h6" sx={{
                fontWeight: 'bold',
                marginBottom: 1,
              }}>Activity</Index.Typography>
              
              <Index.Divider />
              <Index.Typography variant="h6" sx={{
                fontWeight: 'bold',
                marginBottom: 1,
                marginTop: 2,
              }}>New</Index.Typography>
              <Index.List className='notification-list'>
                {notificationList?.length > 0 ? notificationList.map((item) => {
                  return (
                     item?.commentedBy?._id === user.id ? (
                      <Index.ListItem>
                      <Index.ListItemAvatar>
                        <Index.Avatar>
                          <Index.Person />
                        </Index.Avatar>
                      </Index.ListItemAvatar>
                      <Index.ListItemText
                        primary="You commented on your post"
                        secondary={Index.moment(item.createdBy).format("DD/MM/YYYY hh:mm A")}
                      />
                      <Index.IconButton>
                        <Index.Comment />
                      </Index.IconButton>
                    </Index.ListItem>
                     ) : (
                      <Index.ListItem>
                        <Index.ListItemAvatar>
                          <Index.Avatar>
                            <Index.Person />
                          </Index.Avatar>
                        </Index.ListItemAvatar>
                        <Index.ListItemText
                          primary={`${item?.commentedBy?.userName} commented on your post`} 
                          secondary={Index.moment(item.createdBy).format("DD/MM/YYYY hh:mm A")}
                          />
                        <Index.IconButton>
                          <Index.Comment />
                        </Index.IconButton>
                      </Index.ListItem>
                    )

                )
                }):"No notifications yet"}


              </Index.List>
            </Index.CardContent>
          </Index.Card>

 </Index.Box>
    </Index.Modal>
  )
}

export default NotificationList