import React, {useState} from 'react'
import styled from 'styled-components'
import {
  Menu,
  Visibility
} from 'semantic-ui-react'

const BottomNav = (props) => {
  const [menuFixed, setMenuFixed] = useState(true)

  return (
    <div>
      <Menu
        borderless
        fixed={menuFixed ?'bottom' : undefined}
        widths={3}
        fluid
        {...props}
      >
        {props.children}
      </Menu>
    </div>
  )
}

export default BottomNav
