import { useEffect, useState } from "react"
import Index from "../../../container/Index"
import PagesIndex from "../../../container/PagesIndex"

const Layout = () => {
    const [open, setOpen] = useState(true)
    useEffect(() => {
        if (window.screen.width < 900) {
          
          setOpen(false)
        } else {
          setOpen(true)
    
        }
      }, [window.innerWidth]);
  
    return (
        <Index.Box className="user-main">
            <Index.Box className="dashboard-header-main">
                <PagesIndex.Header  open={open} setOpen={setOpen}/>
            </Index.Box>

            <Index.Box className="dashboard-main">
                <Index.Box className={`dashboard-left-main ${open ? "active" : "admin-sidebar-deactive"}`}>                   
                     <PagesIndex.Sidebar open={open} setOpen={setOpen} />
                </Index.Box>
                <Index.Box className={`dashboard-centre-main `}>
                   
                    <Index.Box className={`dashboard-containt-main ${!open ? "dashboard-centre-active":""}`}>
                        <Index.Outlet />
                    </Index.Box>
                </Index.Box>

                <Index.Box className={`dashboard-right-main ${open ? "active":"admin-sidebar-deactive"}`}>
                     <PagesIndex.Message open={open} setOpen={setOpen} />
                </Index.Box>
            </Index.Box>
        </Index.Box>
    )
}
export default Layout