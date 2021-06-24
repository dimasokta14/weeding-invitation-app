import React from 'react'
import styled from 'styled-components'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'

const StyledMap = styled(Map)`
  position: relative !important;
  width: 100% !important;  
  height: 50vh !important;
`

export class GoogleMap extends React.Component {
  state = {
    showingInfoWindow:true,
    activeMarker:{},
    selectedPlace: {}
  }

  handleClickMarker = (props, marker, e) => {
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props
    })
  }

  handleClose = props => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <StyledMap
        google={this.props.google}
        zoom={17}
        initialCenter={
          {
            lat: -7.2768469,
            lng: 112.761887
          }
        }
      >
        <Marker
          onClick={this.handleClickMarker}
          name='Lokasi Resepsi'
          style={{background: 'black'}}
        />
        <Marker
          name={this.props.name}
          onClick={this.handleClickMarker}
          position={{lat: this.props.mLat, lng: this.props.mLng}}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </StyledMap>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(GoogleMap)
