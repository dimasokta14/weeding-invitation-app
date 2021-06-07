import React from 'react'
import {createMedia} from '@artsy/fresnel'
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar
} from 'semantic-ui-react'

import Logo from "../assets/logo-setc-withbg.png"

const AppMedia = createMedia({
  breakpoints:{
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920
  }
})

const mediaStyles = AppMedia.createMediaStyle()
const { Media, MediaContextProvider } = AppMedia

const NavbarMobile = (props) => {
  const {
    children,
    leftItems,
    onPusherClick,
    onToggle,
    rightItems,
    visible
  } = props

  return(
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        items={leftItems}
        vertical
        visible={visible}
      />
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{backgroundColor:  "#eaeaea" }}
      >
        <Menu fixed="top" inverted>
          <Menu.Item>
            <a href="https://setc.id/" target="blank">
              <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
            </a>
          </Menu.Item>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right">
            {rightItems.map((item) => (
              <Menu.Item {...item} />
            ))}
          </Menu.Menu>
        </Menu>
        {/* {children} */}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

const NavbarDesktop = (props) => {
  const { leftItems, rightItems } = props;

  return (
    <Menu fixed="top" inverted>
      <Menu.Item>
        <Image size="mini" src={Logo} />
      </Menu.Item>

      {leftItems.map((item) => (
        <Menu.Item {...item} />
      ))}

      <Menu.Menu position="right">
        {rightItems.map((item) => (
          <Menu.Item {...item} />
        ))}
      </Menu.Menu>
    </Menu>
  );
}

const NavBarChildren = (props) => (
  <Container style={{ marginTop: "5em" }}>{props.children}</Container>
);

const Navbar = (props) => {
  const { children, leftItems, rightItems } = props

  const [visible, setVisible] = React.useState(false)

  const handlePusher = () => {
    if (visible) setVisible(false)
  }

  const handleToggle = () => setVisible(!visible)
  return (
      <div style={{background: "#ededed"}}>
        <Media at="mobile">
          <NavbarMobile
            leftItems={leftItems}
            onPusherClick={handlePusher}
            onToggle={handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavbarMobile>
        </Media>
        <Media greaterThan="mobile">
          <NavbarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Media>
      </div>
  )
}

export default Navbar
