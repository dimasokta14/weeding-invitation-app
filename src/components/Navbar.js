import React from 'react'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Header>
      <Nav>
        <Gutter>
          <FlexItemCenter>
            <div>
              <Logo>
                <a href='/' style={{display: 'block', fontSize: 24}}>
                  📰
                </a>
              </Logo>
            </div>
            <NavWrapper>
              <div style={{flexShrink: 0}}>
                <ul>
                  <ListItem>
                    order
                  </ListItem>
                  <ListItem>
                    cards
                  </ListItem>
                  <ListItem>
                    gift
                  </ListItem>
                </ul>
              </div>
              <NavbarRight>
                <FlexWrapper>
                  <FindUs>
                  🗡️ Find Us
                  </FindUs>
                </FlexWrapper>
              </NavbarRight>
            </NavWrapper>
          </FlexItemCenter>
        </Gutter>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  position: relative;
  z-index: 2;
`

const Nav = styled.nav`
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
`
const Gutter = styled.div`
  padding-left: 2.4rem;
  padding-right: 2.4rem;
`

const FlexItemCenter = styled.div`
  align-items: center !important;
  display: flex !important;
`
const Logo = styled.div`
  width: 51px;
  height: 51px;
  flex-shrink: 0;
  margin-right: 2.4rem !important;
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
`
const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`
const ListItem = styled.li`
  font-family: 'Playfair Display', serif;
  padding-left: 2.4rem;
  display: inline-block;
  text-transform: uppercase;
  font-size: .85rem;
  font-weight: 600;
  :first-of-type{
    padding-left: 0px;
  }
`
const NavbarRight = styled.div`
  font-size: 1.4rem;
  margin-left: auto !important;
  flex-shrink: 0 !important;
`
const FlexWrapper = styled.div`
  margin-left: 4rem !important;
  align-items: center !important;
  display: flex !important;
`

const FindUs = styled.a`
  text-align: inherit;
  text-decoration: none;
  font-weight: 600;
  padding-right: .8rem;
  margin-right: 4rem;
  display: inline-block!important;
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
`

export default NavBar
