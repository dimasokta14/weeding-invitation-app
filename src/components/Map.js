import React from 'react'
import styled from'styled-components'
import {
  Grid,
  Button,
  Tab,
  Segment
} from 'semantic-ui-react'

import MapComponent from './GoogleMap'

const TabWrapper = styled.div`
  & div {
    display: flex;
    flex-direction: column-reverse;
  };
  & div.ui.menu:first-child{
    flex-direction: row !important;
    margin-top: 20px !important;
    border: none !important;
    box-shadow: none !important;
    background: #F8fffb;
    justify-content: center;
  };
  & div.ui.menu:first-child a.item:last-child:before{
    background: none !important;
  }
`
const Maps = styled(MapComponent)`
  
`

const panes = [
  {
    menuItem: 'Parkir Mobil',
    render: () => <Tab.Pane attached={false}><MapComponent name='Parkiran Mobil' mLat='-7.268728' mLng='112.7626809'/></Tab.Pane>,
  },
  {
    menuItem: 'Parkir Motor',
    render: () => <Tab.Pane attached={false}><MapComponent name='Parkiran Motor' mLat='-7.3068728' mLng='113.7626809'/></Tab.Pane>,
  },
]

const Map = () => {
  return (
    <Grid columns='equal'>
      <Grid.Column mobile={16} computer={16} tablet={16} textAlign='center'>
        <h3 className='title'>Peta Lokasi</h3>
        <TabWrapper>
          <Tab
            menu={{attached: false}} 
            panes={panes}
          />
        </TabWrapper>
      </Grid.Column>
    </Grid>
  )
}

export default Map
