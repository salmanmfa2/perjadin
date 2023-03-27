import React from 'react';
import {Form , Button, Container, Dropdown} from 'react-bootstrap';
import { useState } from 'react';


const RegisterPerjadin = (props) => {
  const [inputData, setInputData] = useState('')
  return (
    <div style={{marginTop:"2 em", width:'300px'}}>
     
      <Form onSubmit={props.submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicdad">
        <Form.Label>Nama Kegiatan</Form.Label>
        <Form.Control type="email" placeholder="Kegiatan Perjadin" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicdad'>
        <Form.Label>Akun</Form.Label>
        <Form.Control type='akun' placeholder='BA'></Form.Control>
      </Form.Group>
      <Form.Group>
      <Form.Label>Anggaran</Form.Label>
      <Form.Control type='anggaran' placeholder='Rp.XXXXX..... '></Form.Control>

    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Tanggal</Form.Label>
        <Form.Control type="dates" placeholder="Tanggal" />
      </Form.Group>
      <Form.Group>
        <Form.Check type="checkbox" label="Ajukan Permintaan UM?"></Form.Check>
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    
      
    </div>
  )
}

export default RegisterPerjadin