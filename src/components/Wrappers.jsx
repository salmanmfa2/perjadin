import React from 'react';
import {Card , Button, Dropdown, Badge} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Login from '../pages/Login';
import './wrapper.css';


const Wrappers = (props) => {

    
  return (
    <div>
        <Card className='card-wrappers' bg="dark" >
            <Card.Header>
                {props.title}
            </Card.Header> 
            <Card.Body>
                <Card.Subtitle>{props.subtitle}</Card.Subtitle>
                <h2>{props.value}</h2>
                {props.isAkun &&
                  <Login/>                
                }
            </Card.Body>
        

        </Card>
    </div>
  )
}

export default Wrappers;