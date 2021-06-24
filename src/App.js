import _ from 'lodash'
import React, { useEffect, useState, useCallback } from 'react'
import {
  Container,
  Grid,
  Segment,
  Card,
  Loader
} from 'semantic-ui-react'
import styled from 'styled-components'
import Logo from './assets/logo.png'

import CoverImg from './assets/hero.png'
import { useSpring, animated, useTransition } from 'react-spring'

import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import DayDate from './components/DayDate'

import Deck from './components/Deck'
import Map from './components/Map'
import Penutup from './components/Penutup'
import RSVP from './components/RSVP'
import Amplop from './components/Amplop'


// img
import FmImg from './assets/asset_fm.png'
import MImg from './assets/asset_m.png'
import FlowerF from './assets/ff.png'
import FlowerFl from './assets/ff_l.png'


import SplashScreen from './components/SplashScreen'

const leftItems = [
  { as: "a", content: "Kalender Kegiatan Juni 2021", key: "home" },
];
const rightItems = [
  { as: "a", content: "Kontak", key: "kontak", href: "tel:081233033053" },
  // { SearchBar }
];



const StyledCard = styled(Card)`
  background: url(${CoverImg}) !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  min-height: 100vh !important;
  min-width: 100% !important;
  background-position-x: center !important;
  background-position-y: -30px !important;
  box-shadow: none !important;
`


const MainContent = styled(Container)`
  background: #f8fffb;
  padding: 10px 5px 10px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: bottom;
  padding-top: 30%;
`

const FooterFlowerMain = styled.div`
background: url(${FlowerF}), url(${FlowerFl});
background-repeat: no-repeat, no-repeat;
background-size: 180px, 180px;
background-position-y:-100px, -100px;
background-position-x: -50px, 180px;
  min-height: 20%;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 15px;
`


const Wrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
`

const Loading = () => (
  <Segment style={{background: "transparent", boxShadow: "none", border: "none"}}>
    <Loader size='large' active inline='centered'/>
  </Segment>
)

// const Wrapper = ({children, pos, start, end, offset}) => {
//   const [transform] = useState(() => 
//     offset.interpolate({range: [start, end], output: [100,0], extrapolate: 'clamp'}).interpolate(s => `translate3d(${s}px, 0, 0)`)
//   )

//   const [opacity] = useState(() => offset.interpolate([start, end], [0, 1]))
//   return <animated.div style={{ padding: '20px', marginTop: '20px', opacity }}>{children}</animated.div>
// }

function App() {

  const [renderSplashScreen, setRenderSplashScreen] = useState(true)



  const [{scroll} , set] = useSpring(() => ({ scroll: 0 }))
  const onScroll = useCallback(e => set({ scroll: e.target.scrollTop / 30}), [])

  useEffect(() => {
    setTimeout(
      () => setRenderSplashScreen(!renderSplashScreen),
      2000,
    );
  }, [])



  // spring

    return (
      <div style={{background: "#f8fffb"}}>
        <Navbar/>
        <MainContent>
          <Grid columns='equal'>
            <Grid.Column mobile={16} computer={16} tablet={16}>
              <StyledCard>
                <Card.Content>
                  <LogoContainer><img src={Logo} width='150px'/></LogoContainer>
                </Card.Content>
              </StyledCard>
              <FooterFlowerMain/>
            </Grid.Column>
          </Grid>
        </MainContent>
        <Container onScroll={onScroll}>
        <Wrapper offset={scroll} pos={0} start={0} end={0.5}>
            <Grid columns='equal'>
              <Grid.Column mobile={16} computer={16} tablet={16}>
                <p className='paragraph'>Maha Suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah yang Maha Pengasih, dengan ridho-Mu Kau mempertemukan kami dalam suatu ikatan pernikahan suci.</p>
              </Grid.Column>
            </Grid>
            <Grid columns='equal'>
              <Grid.Column mobile={8} computer={8} tablet={8}>
                <img src={FmImg} width='100%'/>
              </Grid.Column>
              <Grid.Column mobile={8} computer={8} tablet={8}>
                <h3 className='title'>Defie Sagita Widiyatna Kusumah, <span style={{fontSize: '10px', textTransform: 'none'}}>S.I.Kom</span></h3>
                <p className='paragraph'>Putri Pertama dari Bapak <b>Rudy Priyatna</b> dan Ibu <b>Endang Widiarti</b></p>
              </Grid.Column>
            </Grid>
            <Grid columns='equal'>
              <Grid.Column mobile={8} computer={8} tablet={8}>
                <h3 className='title' style={{textAlign: 'right'}}>Tegar Wiratama, <span style={{fontSize: '10px', textTransform: 'none'}}>S.Ptk</span></h3>
                <p className='paragraph' style={{textAlign: 'right'}} >Putra Kedua dari Bapak <b>Dibyo Subroto</b> dan Ibu <b>Dury Widyawati</b></p>
              </Grid.Column>
              <Grid.Column mobile={8} computer={8} tablet={8}>
                <img src={MImg} width='100%'/>
              </Grid.Column>
            </Grid>
          </Wrapper>
          <Wrapper offset={scroll} pos={0.5} start={1} end={0.5}>
            <DayDate/>
          </Wrapper>
          <Wrapper offset={scroll} pos={1} start={0.5} end={1}>
            <Map/>
          </Wrapper>
          <Wrapper offset={scroll} pos={1.5} start={1.5} end={2}>
            <Penutup/>
          </Wrapper>
          <Wrapper offset={scroll} pos={2} start={2} end={2.5}>
            <RSVP/>
          </Wrapper>
          <Wrapper offset={scroll} pos={2.5} start={2.5} end={3}>
            <Amplop/>
          </Wrapper>
          <div id='pdeck'>
            <Deck/>
          </div>
        </Container>
        <BottomNav/>
      </div>
    )
}

export default App
