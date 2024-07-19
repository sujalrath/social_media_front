import React, { useEffect, useState } from 'react'
import Index from '../../../Index';
import { FilterList, Search } from '@mui/icons-material';
import PagesIndex from '../../../PagesIndex';


function Message(props) {
    const dispatch = Index.useDispatch()
    const user = Index.useSelector((state) => state.user.userData)

    const [screen, setScreen] = useState("");

    const [userList, setUserList] = useState([]);
    const getAllUser = async () => {
        // setLoading(true)
        const response = await dispatch(PagesIndex.getAllUser())
        if (response?.payload?.status === 200) {
            setUserList(response.payload.data)
        }
    }
    useEffect(() => {
        getAllUser()
    }, [])
    useEffect(() => {
        if (window.screen.width < 768) {
            setScreen("Mobile");
        } else {
            setScreen("Desktop");
        }
    }, [window.screen.availHeight]);

    return (
        <>
            <Index.Box
                className={`user-sidebar-main ${(screen == "Mobile" ? !props.open : props.open) ? "active" : ""
                    }`}
            >

                <Index.Box className="user-sidebar-inner-main">
                    <Index.Card className='user-sidebar-main-card'>

                        <Index.CardContent>
                            <Index.Typography variant="h6" sx={{
                                fontWeight: 'bold',
                                marginBottom: 1,
                            }}>Suggested For You</Index.Typography>

                            <Index.Divider />
                            <Index.List className='recent-joined'>
                                {userList.length > 0 ? userList.map((item) => {
                                    return (
                                        <>
                                            {item._id === user.id ? "" : (
                                                <Index.ListItem>
                                                    <Index.ListItemAvatar>
                                                        <Index.Avatar>
                                                            <Index.Person />
                                                        </Index.Avatar>
                                                    </Index.ListItemAvatar>
                                                    <Index.ListItemText
                                                        primary={item.userName}
                                                        secondary={`Joined on ${Index.moment(item.createdAt).format("MM/DD/YYYY")}`}
                                                    />
                                                </Index.ListItem>
                                            )}

                                        </>
                                    )
                                })
                                    : ""}


                            </Index.List>



                        </Index.CardContent>
                    </Index.Card>


                </Index.Box>
            </Index.Box>
        </>
    )
}

export default Message