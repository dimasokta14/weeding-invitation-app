import React from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import {
  Grid,
  Segment,
  Form,
  Button
} from 'semantic-ui-react'

import {connect} from 'react-redux'
import {createTamu} from '../actions/doc'
import {useFirebase} from 'react-redux-firebase'

import bq from '../assets/bouquet.jpg'
import FlowerGif from '../assets/tenor_fg.gif'

const options = [
  { key: 'r1', text: 'AKAN HADIR', value: 'akan hadir'},
  { key: 'rd', text: 'BELUM DIPASTIKAN', value: 'belum pasti'},
  { key: 'r2', text: 'TIDAK HADIR', value: 'tidak hadir'}
]

const StyledButton = styled(Button)`
  border-radius: 20px !important;
  background: #e3c7ca !important; 
  color: black !important;
`

const RSVP = (props) => {
  const firebase = useFirebase()
  const [values, setValues] = React.useState({
    nama: '',
    whatsapp: '',
    jumlah: 0,
    ucapan: '',
    status: ''
  })

  const handleChange = prop => e => {
    e.preventDefault()
    setValues({...values, [prop]: e.target.value})
  }

  const handleSubmit = () => {
    try {
      Swal.fire({
        title:'Apakah data sudah benar?',
        text: 'Data yang kamu simpan akan masuk di daftar tamu kami',
        icon: 'warning',
        showCancelButton: true,
        // confirmButtonColor: '#03a66a',
        // cancelButtonColor: '#d33',
        confirmButtonText: 'Simpan'
      }).then((result) => {
        if(result.isConfirmed){
          try {
            props.create(values)
            Swal.fire({
              title: 'Berhasil',
              text: 'Data berhasil disimpan',
              icon: 'success',
              background: `#fff url(${bq}) no-repeat top center / 500px`,
              backdrop: `
                rgba(253,190,212,0.4)
                url(${FlowerGif})
                left top
                no-repeat
              `
            })
          } catch (err) {
            Swal.fire(
              'Oppsssss!',
              'Nampaknya ada yang salah, periksa koneksi internet kamu!' + err,
              'error'
            )
          }
        }
      })
    } catch (err) {
      Swal.fire(
        'Oppssss!',
        err,
        'error'
      )
    }
  }

  return (
    <Grid columns='equal'>
      <Grid.Column mobile={16} computer={16} tablet={16}>
        <h3 className='title' style={{textAlign:'center'}}>Buku Tamu</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>NAMA</label>
            <input placeholder='contoh: RENO - JEMBER' onChange={handleChange('nama')}/>
          </Form.Field>
          <Form.Field>
            <label>No. WHATSAPP</label>
            <input placeholder='contoh: 081xxxxxx' onChange={handleChange('whatsapp')}/>
          </Form.Field>
          <Form.Field>
            <label>JUMLAH ORANG YANG HADIR</label>
            <input type='number' placeholder='contoh: 4' onChange={handleChange('jumlah')}/>
          </Form.Field>
          <Form.TextArea
            label='UCAPAN & DOA'
            placeholder='Isi ucapan dan Doa...'
            onChange={handleChange('ucapan')}
          />
          <Form.Select
            fluid
            label='KONFIRMASI KEHADIRAN'
            options={options}
            value={options.value}
            placeholder='Konfirmasi Kehadiran'
            onChange={async (e, { value }) => {
              setValues({...values, ['status']: value})
            }}
          />
          <div style={{display:'flex', justifyContent: 'center'}}>
            <StyledButton type='submit'>Submit Kehadiran</StyledButton>
          </div>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    create: (data) =>
      dispatch(createTamu(data))
  }
}

export default connect(null, mapDispatchToProps)(RSVP)