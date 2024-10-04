import React, { useEffect, useState } from 'react'
import Index from '../../../container/Index';
import PagesIndex from '../../../container/PagesIndex';

function Sidebar(props) {
  const [screen, setScreen] = useState("");

  const dispatch = Index.useDispatch()
  const user = Index.useSelector((state) => state.user.userData)

  const [notificationList, setNotificationList] = useState([])
  useEffect(() => {
    if (window.screen.width < 768) {
      setScreen("Mobile");
      props.setOpen(false)
    } else {
      setScreen("Desktop");
      props.setOpen(true)

    }
  }, [window.screen.availHeight]);
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
    <>
      <Index.Box
        className={`user-sidebar-main ${(screen === "Mobile" ? !props.open : props.open) ? "active" : ""
          }`}
      >

        <Index.Box className="user-sidebar-inner-main">
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
              <Index.List>
                {notificationList?.length > 0 && notificationList.map((item) => {
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
                })}


              </Index.List>
            </Index.CardContent>
          </Index.Card>


        </Index.Box>
      </Index.Box>
    </>
  )
}

export default Sidebar