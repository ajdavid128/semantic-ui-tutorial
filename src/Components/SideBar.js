import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Outlet, Link } from "react-router-dom";
import HSicon from '../images/HSicon.png';

function SideBar() {


    return(
        <>
            <Menu vertical id="side-nav">
                <Menu.Item>
                    <Link to="/">
                        <Image src={HSicon} size="tiny"/>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/">
                        <Icon name="home"/>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/doodles">
                        Doodles
                    </Link>
                </Menu.Item>
            </Menu>
            <Outlet />
        </>

    )
}

export default SideBar