import { Outlet, Link } from "react-router-dom";
import { Input, Menu, Icon, Image } from "semantic-ui-react";
import HSicon from '../images/HSicon.png';


function NavBar() {
    return (
        <>
            <Menu class="ui menu">
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
            
            
                <Menu.Item>
                    <Link to="/faq">
                        <Icon name="help"/>
                        FAQ
                    </Link>
                </Menu.Item>
                
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Input icon="search" placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Outlet />
        </>
    )
};

export default NavBar;