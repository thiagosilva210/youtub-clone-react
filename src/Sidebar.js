import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

import WhatshotIcon from '@material-ui/icons/Whatshot'
import HomeIcon from '@material-ui/icons/Home'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'


import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideo' 
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'






function Sidebar() {
    return (
        <div className="sidebar">

    
<SidebarRow selected Icon={HomeIcon} title="home"/>
<SidebarRow Icon={WhatshotIcon} title="Trending"/>
<SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>

<hr/>

    
<SidebarRow Icon={VideoLibraryIcon} title="Library"/>
<SidebarRow Icon={HistoryIcon} title="Trending"/>
<SidebarRow Icon={OnDemandVideoIcon} title="Subscriptions"/>

<SidebarRow Icon={WatchLaterIcon} title="Library"/>
<SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Trending"/>
<SidebarRow Icon={ExpandMoreOutlinedIcon} title="See more"/>

<hr/>
        </div>
    )
}

export default Sidebar 
