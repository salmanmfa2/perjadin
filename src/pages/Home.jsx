import React, { useEffect, useState } from 'react';
import Wrappers from '../components/Wrappers';
import Navbar from '../containers/NavigationBar';
import RegisterPerjadin from '../containers/RegisterPerjadin';
import {Button, Card} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Calendar from '../components/Calender';
import DaftarKegiatan from '../components/DaftarKegiatan';


const Home = () => {
    
    const navigate = useNavigate()

    //Date handler (Badge)
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
    
    //Value Handler (DUMMY)
    const findValue = () => {
      const num = '15.360.000'
      return `Rp. ${num}` 
    };

    //State handler Daftar Kegiatan
    const[keg, setKeg] = useState (
      [
        {id: 1, namaKegiatan :'Monitoring Infrastruktur', lokasiKegiatan :'Kolaka', anggotaTim:['Salman','Salman2','Salman3'], tanggalMulai:'10-04-2023', tanggalSelesai:'15-04-2023', jumlahAnggaran :'2540000', akun:'524111', isVerified: false},
        {id: 2, namaKegiatan :'Monitoring BLU', lokasiKegiatan :'Kendari', anggotaTim:['Salman','Salman2','Salman3'], tanggalMulai:'12-04-2023', tanggalSelesai:'18-04-2023', jumlahAnggaran :'1050000', akun:'524111', isVerified: true}
      ]
    );
    const addKegiatan = (newKegiatan, newLokasi, newAnggota, newTanggalMulai,newTanggalAkhir,newAnggaran,newAkun)=> {
      const newId = keg[keg.length-1].id + 1;
      const objKegiatan = {
        id:newId,
        namaKegiatan : newKegiatan,
        lokasiKegiatan : newLokasi,
        anggotaTim : newAnggota,
        tanggalMulai : newTanggalMulai,
        tanggalSelesai : newTanggalAkhir,
        jumlahAnggaran : newAnggaran,
        akun : newAkun,
        isVerified : false

      };
      const tambahKegiatan = [...keg,objKegiatan];
      setKeg(tambahKegiatan);
    }
    //useEffect testing alur data
    useEffect(
      ()=>{
        let textTitle = 'kegiatan: ' + keg.length;
        console.log(textTitle);
        document.title = textTitle; 
      },
      [keg]
    );

    
  return (
    <div>
        <div className="white-space" style={{height:"2 em", backgroundColor:"white"}}>
        </div>
        <div className="card-status" style={{display:'flex', flexDirection:'row'}}>
            <Wrappers title="Ketersediaan Anggaran" subtitle="524111" value={findValue()} isAkun='true'/>
            <Wrappers title="Next Perjadin" subtitle="Scheduled" value="10-04-2023" />
            <Calendar/>
            
        </div>
        <div className="second-part">
          <Card >
            <Card.Header style={{fontSize:'25px', fontFamily:'roboto'}}>
              <div className="card-header">
                <h2>Daftar Kegiatan</h2>
              </div>
            </Card.Header>
            <Card.Body>
            <DaftarKegiatan handleList = {keg} handleForm ={addKegiatan} />
            </Card.Body>
           
          

          </Card>

        </div>
        <div className="bottom" style={{backgroundColor:'white', width:'2000px', height:'100px'}}>
          
        </div>
        
        
    </div>
  )
}

export default Home
