import { Input, Menu, Icon, Image } from "semantic-ui-react";
import HSicon from '../images/HSicon.png';


function NavBar() {
    return (
        <Menu class="ui menu">
            <Menu.Item>
                <Image src={HSicon} size="tiny"/>
            </Menu.Item>
            <Menu.Item>
                <Icon name="home"/>
                Home
            </Menu.Item>
            <Menu.Item>
                About
            </Menu.Item>
            <Menu.Item>
                <Icon name="help"/>
                FAQ
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    <Input icon="search" placeholder='Search...' />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
};

export default NavBar;