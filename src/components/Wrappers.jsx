import React from 'react';
import {Card , Button, Dropdown, Badge} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const Wrappers = (props) => {
    
    const getAkun = () => {

    }

  return (
    <div>
        <Card bg="dark" style={{width:'20em',margin:"10px", color:'white'}}>
            <Card.Header>
                Ketersediaan Pagu
            </Card.Header> 
            <Card.Body>
                <Card.Title>Akun</Card.Title>
                <h2>{props.pagu}</h2>
            </Card.Body>
        

        </Card>
    </div>
  )
}

export default Wrappers;