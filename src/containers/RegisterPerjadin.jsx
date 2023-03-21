import React from 'react';
import {Form , Button, Container, Dropdown} from 'react-bootstrap';


const RegisterPerjadin = () => {
  return (
    <div style={{marginTop:"2 em"}}>
     
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama Kegiatan</Form.Label>
        <Form.Control type="email" placeholder="Kegiatan Perjadin" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicdad'>
        <Form.Label>Akun</Form.Label>
        <Form.Control type='pilih tanggal' placeholder=''></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Tanggal</Form.Label>
        <Form.Control type="dates" placeholder="Tanggal" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>

    <Form.Group>
      <Form.Label></Form.Label>
      <Form.Control></Form.Control>

    </Form.Group>
      
    </div>
  )
}

export default RegisterPerjadin