import React from 'react'
import Index from '../container/Index'
import { DataService } from '../config/DataService'

const UserPrivateRoutes = () => {
    const userToken=Index.useSelector((state)=>state.user.userToken)
    const isAuthenticate=(token)=>{
        if(!token) return false;
        DataService.defaults.headers.common.auth = token;
return true
    }
    return isAuthenticate(userToken)?(
        <>
        <Index.Outlet/>
        </>
    ):(
        <>
        <Index.Navigate to="/" replace={true} />
        </>
    )

}

export default UserPrivateRoutes