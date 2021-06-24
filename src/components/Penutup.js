import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Grid
} from 'semantic-ui-react'

const Ayat = styled.span`
  font-family: 'Spectral', serif;
  line-height: 2;
  font-weight: 500;
  color: #e3c7ca;
  font-size: 14px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px;
`
const StyledButton = styled(Button)`
  border-radius: 20px !important;
  background: #e3c7ca !important; 
  color: black !important;
`
const EmptySpace = styled.div`

`

const Penutup = () => {
  return (
    <Grid columns='equal'>
      <Grid.Column mobile={16} computer={16} tablet={16}>
        <p className='paragraph'>Merupakan suatu Kehormatan dan Kebahagiaan kami, Apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.</p>
        <p className='paragraph'
          style={{fontStyle:'italic', textAlign: 'center', fontSize:'10px'}}        
        >Wassalamualaikum Warahmatullahi Wabarakaatuh</p>
        <ButtonWrapper>
          <StyledButton>Isi Buku Tamu</StyledButton>
        </ButtonWrapper>
        <EmptySpace/>
        <p className='paragraph'>
          ”Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
          <br/>
          <Ayat>
          QS Ar-Rum 21
          </Ayat>
        </p>
      </Grid.Column>
    </Grid>
  )
}

export default Penutup
