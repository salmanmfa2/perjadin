import React from 'react';
import Wrappers from '../components/Wrappers';
import Navbar from '../containers/NavigationBar';
import RegisterPerjadin from '../containers/RegisterPerjadin';
import {Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Calendar from '../components/Calender';
import DaftarKegiatan from '../components/DaftarKegiatan';

const Home = () => {
    
    const navigate = useNavigate()
    const titleSelector = () => {
       
    }
    //Date handler
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
    
    //Value Handler
    const findValue = () => {
      const num = '15.360.000'
      return `Rp. ${num}` 
    }

  return (
    <div>
        <div className="white-space" style={{height:"2 em", backgroundColor:"white"}}>
        </div>
        <div className="card-status" style={{display:'flex', flexDirection:'row'}}>
            <Wrappers title="Ketersediaan Akun" subtitle="521xxx" value={findValue()}/>
            <Wrappers title="Next Perjadin" subtitle="Scheduled" value="10-04-2023" />
            <Calendar/>
            
        </div>
        <DaftarKegiatan/>
        
    </div>
  )
}

export default Home
