import React, {useEffect} from 'react'
import styled from 'styled-components'
import {
  Container,
  Grid,
  Button,
  Segment
} from 'semantic-ui-react'

import {useTimer} from 'react-timer-hook'
import Dot from '../assets/dot.png'

const StyledButton = styled(Button)`
  border-radius: 20px !important;
  background: #e3c7ca !important; 
  color: black !important;
`

const WeddingTimer = ({expiryTimestamp}) => {

  const {
    seconds,
    minutes,
    hours,
    days,
    start
  } = useTimer({expiryTimestamp, onExpire: () => console.warn('expired')})

  useEffect(() => {
    start()
  }, [])

  return (
      <div id='timer'>
        <div className='number-list'>
          <div className='item'>
            <div className='row-timer'>
              <h3 className='count'>{days}</h3>
              <span className='separator'>:</span>
            </div>
            <span className='unit'>Hari</span>
          </div>
          <div className='item'>
            <div className='row-timer'>
              <h3 className='count'>{hours}</h3>
              <span className='separator'>:</span>
            </div>
            <span className='unit'>Jam</span>
          </div>     
          <div className='item'>
            <div className='row-timer'>
              <h3 className='count'>{minutes}</h3>
              <span className='separator'>:</span>
            </div>
            <span className='unit'>Minute</span>
          </div>       
          <div className='item'>
            <div className='row-timer'>
              <h3 className='count'>{days}</h3>
            </div>
            <span className='unit'>Detik</span>
          </div>
        </div>
      </div>
  )
}

const DayDate = () => {
  const time = new Date(2021, 6, 25, 11);
  time.setSeconds(time.getSeconds() + 600);

  return (
    <>
      <Grid columns='equal'>
        <Grid.Column mobile={16} computer={16} tablet={16}>
          <p className='paragraph'>Tanpa mengurangi rasa hormat, kami bemaksud mengundang Bapak/ibu/Saudara/i untuk dapat hadir di acara pernikahan kami.</p>
          <p className='paragraph'>Yang Insyallah akan dilaksanakan pada :</p>
          <div>
            <hr className='styled'/>
            <h3 className='title' style={{textAlign: 'center', marginTop:'15px'}}>Minggu, 25 Juli 2021</h3>
            <hr className='styled'/>
          </div>
        </Grid.Column>
      </Grid>
      <Grid columns='equal'>
        <Grid.Column mobile={7} computer={7} tablet={6}>
          <div>
            <h4 className='akad' style={{textAlign: 'right'}}>Akad Nikah<br/>
              <span><b style={{color: '#e3c7ca'}}>08.00 </b>s/d selesai</span>
            </h4>
          </div>
        </Grid.Column>
        <Grid.Column mobile={2} computer={2} tablet={2} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src={Dot} width={60}/>
        </Grid.Column>
        <Grid.Column mobile={7} computer={7} tablet={7}>
          <div>
            <h4 className='akad' style={{textAlign: 'left'}}>Resepsi<br/>
              <span><b style={{color: '#e3c7ca'}}>11.00 </b>s/d selesai</span>
            </h4>
          </div>
        </Grid.Column>
      </Grid>
      <Grid columns='equal'>
        <Grid.Column mobile={16} computer={16} tablet={16}>
          <h5 className='alamat'>Di <b>Jalan Kalidami 9/5, Surabaya</b></h5>
        </Grid.Column>
        {/* <Grid.Column mobile={16} computer={16} tablet={16} textAlign='center'>
          <StyledButton>Lihat Lokasi</StyledButton>
        </Grid.Column> */}
      </Grid>
        <Grid columns='equal'>
          <Grid.Column mobile={16} computer={16} tablet={16}>
            <WeddingTimer expiryTimestamp={time}/>
          </Grid.Column>
        </Grid>
    </>
  )
}

export default DayDate
