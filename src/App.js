import _ from 'lodash'
import React, { Component } from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Card,
  Button,
  Popup,
  Input,
  Dimmer,
  Loader
} from 'semantic-ui-react'
import styled from 'styled-components'
import Logo from './assets/logo-setc-withbg.png'
import MenuBottom from './components/Menu'
import ReactTooltip from 'react-tooltip'

import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'

// icon
import iPelatihan from './assets/vc-pelatihan.svg'
import iWebinar from './assets/vc-webinar.svg'
import iLainnya from './assets/vc-lainnya.svg'
// import {google} from 'googleapis'

import 'firebase/database'
import {
  FirebaseDatabaseMutation, FirebaseDatabaseNode
} from '@react-firebase/database'

import jsonData from './database/csvjson.json'


const SearchBar = () => (
  <Input
    action={{ type: 'submit', content: 'Go' }}
    placeholder='Navigate to...'
  />
) 


const leftItems = [
  { as: "a", content: "Kalender Kegiatan Juni 2021", key: "home" },
];
const rightItems = [
  { as: "a", content: "Kontak", key: "kontak", href: "tel:081233033053" },
  // { SearchBar }
];


const BottoNavContent = styled.a`
  display:flex;
  flex-direction:column;
  align-items: center;
  color: inherit;
  padding: 10px;
`

const MenuItem = styled(Menu.Item)`
  padding: 0px !important;
  &:hover,active {
    background: rgba(0,0,0,0.87) !important;
    color: white !important;
  };

`

const cardContainer = {
  height: "calc(100% - 30px)",
  marginBottom: "30px",
  boxShadow: "0 16px 40px 0 rgb(0 0 0 / 4%)",
  width: "100%"
}

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  borderBottom: 'solid 0.5px #eaeaea'
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

const headerTop = {
  padding: "5px 0px 5px",
  marginBottom: "10px",
  backgroundColor: "#fff"
}

const buttonItem = {

}

const StyledReminder = styled.a`
  color: #eaeaea;
  &:hover {
    color: red;
  }
`

const StyledCard = styled(Card)`
  border: 2px solid transparent !important;
  border-bottom: 8px solid ${props => props.color || 'white'};
  transition: all .3s ease-in-out !important;
  color: rgba(0,0,0,.87) !important;
  &:hover{
      border-color: ${props => props.color || 'white'};
  };
`

const mainContent = {
  background: "#edeef2", 
  marginBottom: "40px", 
  marginTop: "0px",
  paddingTop: "40px"
}


const StyledButton = styled(Button)`
  background-color: transparent !important;
  padding: 0px !important;
  font-size: 1.5em !important;
`

const StyledContainer = styled(Container)`
  margin-bottom: 70px;
  border: none;
  border-bottom: dashed 0.1px;
`

const StyledLink = styled.a`
  margin: 20px 0px;
`

const Paragraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical; 
`


const LeftImage = () => (
  <Image
    floated='left'
    size='medium'
    src='/images/wireframe/square-image.png'
    style={{ margin: '2em 2em 2em -4em' }}
  />
)

const RightImage = () => (
  <Image
    floated='right'
    size='medium'
    src='/images/wireframe/square-image.png'
    style={{ margin: '2em -4em 2em 2em' }}
  />
)

const Loading = () => (
  <Segment style={{background: "transparent", boxShadow: "none", border: "none"}}>
    <Loader size='large' active inline='centered'/>
  </Segment>
)

const settings = {
  CLIENT_ID: "772615264551-6qbs6rmlt2dlqehlv92ahp814f75jsr4.apps.googleusercontent.com",
  API_KEY: "AIzaSyBhf5Mj7M4_uhODMMQhyeI0he7tlRjkQcs",
  DISCOVERY_DOCS: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
  SCOPES: "https://www.googleapis.com/auth/calendar.readonly"
}

const gapi = window.gapi

const s = (a) => JSON.stringify(a, null, 2)

const googleConfig = {
  CLIENT_ID: "772615264551-6qbs6rmlt2dlqehlv92ahp814f75jsr4.apps.googleusercontent.com",
  API_KEY: "AIzaSyBhf5Mj7M4_uhODMMQhyeI0he7tlRjkQcs",
  DISCOVERY_DOCS: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
  SCOPES: "https://www.googleapis.com/auth/calendar.readonly",
  CLIENT_SECRET: "Sayw4_RwTZL196Pt86n8w0PD",
  CLIENT_REDIRECT: "https://kalender-setc.web.app"
}

export default class App extends Component {

  state = {
    menuFixed: false,
    overlayFixed: false,
    limit: 4
  }

  // loadCalendarApi = () => {
  //   // const script = document.createElement("script")
  //   // script.src = "https://apis.google.com/js/api.js"


  //   // script.onload = () => {
  //   //   try {
  //   //     gapi.load('client', () => {
  //   //       gapi.client.setApiKey(settings.API_KEY)
  //   //       gapi.client.load('calendar', 'v3', () => {
  //   //         console.log('API Ready')
  //   //       })
  //   //     })
  //   //   } catch (error) {
  //   //     console.log(error)
  //   //   }
  //   // }

  //   // // document.appendChild(script)
    
  // }

  // createConnectionToGoogle = () => {
  //   return google.auth.OAuth2(
  //     googleConfig.CLIENT_ID,
  //     googleConfig.CLIENT_SECRET,
  //     googleConfig.CLIENT_REDIRECT
  //   )
  // }

  // getConnectionUrl = (auth) => {
  //   return auth.generateAuthUrl({
  //     access_type: 'online',
  //     prompt: 'consent',
  //     scope: googleConfig.SCOPES
  //   })
  // }

  // getGoogleCalendarAPI = (auth) => {
  //   return google.calendar({
  //     version: 'v3',
  //     auth: auth
  //   })
  // }

  // startConnectionToGoogle = () => {
  //   let auth = this.createConnectionToGoogle()
  //   let url = this.getConnectionUrl(auth)
  //   return url
  // }



  // componentDidMount(){
  //   this.startConnectionToGoogle().then((d) => console.log(d))
  // }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  handleClickReminder = () => {
    // gapi.client.init({
    //   apiKey: settings.API_KEY,
    //   clientId: settings.CLIENT_ID,
    //   discoveryDocs: settings.DISCOVERY_DOCS,
    //   scope: settings.SCOPES
    // })
    // gapi.auth2.init({
    //   client_id: settings.CLIENT_ID,
    //   scope: settings.SCOPES
    // }).then(() => {
    //   console.log('SignIn', gapi.auth2.getAuthInstance().isSignedIn.get())
    //   gapi.auth2.getAuthInstance().isSignedIn.listen((signedIn) => {
    //     console.log(signedIn)
    //   })
    // })
    // gapi.auth2.getAuthInstance()
    //   .signIn({scope: settings.SCOPES})
    //   .then(() => {
    //     try {
    //       console.log('Login Success')
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   })
    // gapi.load('calendar', 'v3' , () => {
    //   console.log('calendar')
    // })

    // gapi.auth2.getAuthInstance().signIn()
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {

    return (
      <div style={{background: "#ededed"}}>
        <style>
          {`
          html, body {
            background: #fff;
          }
        `}
        </style>
        <Navbar
          leftItems={leftItems}
          rightItems={rightItems}
        >
          <div style={{paddingTop: "15px"}}>
          <FirebaseDatabaseNode
            path='calendar/'
            limitToFirst={this.state.limit}
            orderByChild="type"
            equalTo="training"
          >
           {d => {
             if(d.isLoading) {
              return <Loading/>
             }else if(!d.value){
               return null
             }
             return (
              <StyledContainer>
                <div id="pelatihan"/>
                <Header as='h3' textAlign='center'>PELATIHAN</Header>
                <Grid columns='equal'>
                  {
                    d.value && Object.values(d.value).map((data, index) => (
                      <Grid.Column mobile={16} computer={4} tablet={8} key={index}>
                        <StyledCard style={cardContainer} color="#5BAA73 !important" href={data.link}target="blank">
                          <Card.Content>
                            <Grid>
                              <Grid.Column floated='left' width={5}>
                                <Card.Header>
                                  <h1 style={{color:"#5BAA73"}}>{data.date}</h1>
                                </Card.Header>
                              </Grid.Column>
                              <Grid.Column floated='right' width={5} textAlign="center" verticalAlign="middle">
                                <StyledReminder className='reminder' data-tip data-for="reminder">
                                  <i class="far fa-bell" style={{fontSize: "20px"}}></i>
                                </StyledReminder>
                                <ReactTooltip id='reminder'>
                                  <p>setel pengingat</p>
                                </ReactTooltip>
                              </Grid.Column>
                            </Grid>
                            <Card.Meta>
                              <h4>{data.month}</h4>
                            </Card.Meta>
                          </Card.Content>
                          <Card.Content>
                            <Header as='h4' style={{ fontSize: '1.5em' }}>
                              {data.title}
                            </Header>
                            <div style={{width: "100%", overflow: "hidden"}}>
                              <Paragraph>
                                {data.description}
                              </Paragraph>
                            </div>
                          </Card.Content>
                          <Card.Content style={{border: 'none'}}>
                            <ul>
                              <li style={{marginBottom: "10px"}}>
                                <h4 style={{fontWeight: "400"}}><i class="far fa-clock" style={{marginRight: "10px"}}></i>{data.time} WIB</h4>
                              </li>
                              <li style={{marginBottom: "10px"}}>
                                <h4 style={{fontWeight: "400"}}><i class="far fa-play-circle" style={{marginRight: "10px"}}></i>ZOOM Meeting</h4>
                              </li>
                              <li>
                                <h4 style={{fontWeight: "400"}}><i class="far fa-user" style={{marginRight: "10px"}}></i>{data.trainer}</h4>
                              </li>
                            </ul>
                          </Card.Content>
                          <Card.Content extra style={{paddingTop: "15px", paddingBottom: "15px"}}>
                            <StyledLink href={data.link} target="blank">
                              Selengkapnya <Icon name='arrow right' />
                            </StyledLink>
                          </Card.Content>
                        </StyledCard>
                      </Grid.Column>
                    ))
                  }
                </Grid>
              </StyledContainer>
             )
           }} 
          </FirebaseDatabaseNode>
          <FirebaseDatabaseNode
            path='calendar/'
            limitToFirst={this.state.limit}
            orderByChild="type"
            equalTo="webinar"
          >
           {d => {
             if(d.isLoading) {
              return <Loading/>
             }else if(!d.value){
               return null
             }
             return (
              <StyledContainer>
                <div id="pelatihan"/>
                <Header as='h3' textAlign='center'>PELATIHAN</Header>
                <Grid columns='equal'>
                  {
                    d.value && Object.values(d.value).map((data, index) => (
                      <Grid.Column mobile={16} computer={4} tablet={8} key={index}>
                        <StyledCard style={cardContainer} color="#465AF7 !important" href={data.link}target="blank">
                          <Card.Content>
                            <Grid>
                              <Grid.Column floated='left' width={5}>
                                <Card.Header>
                                  <h1 style={{color:"#465AF7"}}>{data.date}</h1>
                                </Card.Header>
                              </Grid.Column>
                              <Grid.Column floated='right' width={5} textAlign="center" verticalAlign="middle">
                                <StyledReminder className='reminder' data-tip data-for="reminder">
                                  <i class="far fa-bell" style={{fontSize: "20px"}}></i>
                                </StyledReminder>
                                <ReactTooltip id='reminder'>
                                  <p>setel pengingat</p>
                                </ReactTooltip>
                              </Grid.Column>
                            </Grid>
                            <Card.Meta>
                              <h4>{data.month}</h4>
                            </Card.Meta>
                          </Card.Content>
                          <Card.Content>
                            <Header as='h4' style={{ fontSize: '1.5em' }}>
                              {data.title}
                            </Header>
                            <div style={{width: "100%", overflow: "hidden"}}>
                              <Paragraph>
                                {data.description}
                              </Paragraph>
                            </div>
                          </Card.Content>
                          <Card.Content style={{border: 'none'}}>
                            <ul>
                              <li style={{marginBottom: "10px"}}>
                                <h4 style={{fontWeight: "400"}}><i class="far fa-clock" style={{marginRight: "10px"}}></i>{data.time} WIB</h4>
                              </li>
                              <li style={{marginBottom: "10px"}}>
                                <h4 style={{fontWeight: "400"}}><i class="far fa-play-circle" style={{marginRight: "10px"}}></i>ZOOM Meeting</h4>
                              </li>
                              <li>
                                <h4 style={{fontWeight: "400"}}><i class="far fa-user" style={{marginRight: "10px"}}></i>{data.trainer}</h4>
                              </li>
                            </ul>
                          </Card.Content>
                          <Card.Content extra style={{paddingTop: "15px", paddingBottom: "15px"}}>
                            <StyledLink href={data.link} target="blank">
                              Selengkapnya <Icon name='arrow right' />
                            </StyledLink>
                          </Card.Content>
                        </StyledCard>
                      </Grid.Column>
                    ))
                  }
                </Grid>
              </StyledContainer>
             )
           }} 
          </FirebaseDatabaseNode>
          <FirebaseDatabaseNode
            path='calendar/'
            limitToFirst={this.state.limit}
            orderByChild="type"
            equalTo="other"
          >
           {d => {
             if(d.isLoading) {
              return <Loading/>
             }else if(!d.value){
               return null
             }
             return (
              <StyledContainer>
                <div id="pelatihan"/>
                <Header as='h3' textAlign='center'>LAINNYA</Header>
                <Grid columns='equal'>
                  {
                    d.value && Object.values(d.value).map((data, index) => (
                      <Grid.Column mobile={16} computer={4} tablet={8} key={index}>
                        <StyledCard style={cardContainer} color="#F4A965 !important" href={data.link}target="blank">
                          <Card.Content>
                            <Grid>
                              <Grid.Column floated='left' width={5}>
                                <Card.Header>
                                  <h1 style={{color:"#F4A965"}}>{data.date}</h1>
                                </Card.Header>
                              </Grid.Column>
                              <Grid.Column floated='right' width={5} textAlign="center" verticalAlign="middle">
                                <StyledReminder className='reminder' data-tip data-for="reminder">
                                  <i class="far fa-bell" style={{fontSize: "20px"}}></i>
                                </StyledReminder>
                                <ReactTooltip id='reminder'>
                                  <p>setel pengingat</p>
                                </ReactTooltip>
                              </Grid.Column>
                            </Grid>
                            <Card.Meta>
                              <h4>{data.month}</h4>
                            </Card.Meta>
                          </Card.Content>
                          <Card.Content>
                            <Header as='h4' style={{ fontSize: '1.5em' }}>
                              {data.title}
                            </Header>
                            <div style={{width: "100%", overflow: "hidden"}}>
                              <Paragraph>
                                {data.description}
                              </Paragraph>
                            </div>
                          </Card.Content>
                          <Card.Content style={{border: 'none'}}>
                            <ul>
                              <li style={{marginBottom: "10px"}}>
                                <h4 style={{fontWeight: "400"}}><i class="far fa-clock" style={{marginRight: "10px"}}></i>{data.time} WIB</h4>
                              </li>
                              <li style={{marginBottom: "10px"}}>
                                <h4 style={{fontWeight: "400"}}><i class="far fa-play-circle" style={{marginRight: "10px"}}></i>ZOOM Meeting</h4>
                              </li>
                              <li>
                                <h4 style={{fontWeight: "400"}}><i class="far fa-user" style={{marginRight: "10px"}}></i>{data.trainer}</h4>
                              </li>
                            </ul>
                          </Card.Content>
                          <Card.Content extra style={{paddingTop: "15px", paddingBottom: "15px"}}>
                            <StyledLink href={data.link} target="blank">
                              Selengkapnya <Icon name='arrow right' />
                            </StyledLink>
                          </Card.Content>
                        </StyledCard>
                      </Grid.Column>
                    ))
                  }
                </Grid>
              </StyledContainer>
             )
           }} 
          </FirebaseDatabaseNode>
        </div>
        </Navbar>
        <Segment>
          <BottomNav>
            <MenuItem>
              <BottoNavContent
                href="#pelatihan"
              >
                {/* <img
                  src={iPelatihan}
                  width="25px"
                  style={{marginBottom: "7px"}}
                /> */}
                <i className='far fa-user' style={{marginBottom: "7px", fontSize:"20px"}}/>
                Pelatihan
              </BottoNavContent>
            </MenuItem>
            <MenuItem>
              <BottoNavContent
                href="#webinar"
              >
                <img
                  src={iWebinar}
                  width="25px"
                  style={{marginBottom: "7px"}}
                />
                Webinar
              </BottoNavContent>
            </MenuItem>
            <MenuItem>
              <BottoNavContent
                href="#lainnya"
              >
                <img
                  src={iLainnya}
                  width="25px"
                  style={{marginBottom: "7px"}}
                />
                Lainnya
              </BottoNavContent>
            </MenuItem>
          </BottomNav>
        </Segment>
      </div>
    )
  }
}
