import React from 'react';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const DaftarKegiatan = (props) => {
  return (
    <div>
        
        <Table size="sm" striped="columns" style={{margin:'5px', width:'1500px' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Kegiatan</th>
          <th>Tujuan</th>
          <th>Anggota Tim</th>
          <th>Tanggal Mulai</th>
          <th>Tanggal Selesai</th>
          <th>Penggunaan Anggaran</th>
          <th>Akun</th>
          <th>Action</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Monitoring Infratruktur</td>
          <td>Kolaka</td>
          <td><b>Saya</b>,Salman, Beni</td>
          <td>10-04-2023</td>
          <td>15-04-2023</td>
          <td>Rp. 2.540.000</td>
          <td>524111</td>
          <td style={{display:'flex' , flexDirection:'row', gap:'5px'}}>
            <Button variant='dark'>Cancel</Button>
          </td>
          <td>Sudah Diverifikasi</td>
        </tr>
        {props.handleList?.map((keg)=>(
        <tr>
          <td>{keg.id}</td>
          <td>{keg.namaKegiatan}</td>
          <td>{keg.lokasiKegiatan}</td>
          <td>{keg.anggotaTim}</td>
          <td>{keg.tanggalMulai}</td>
          <td>{keg.tanggalSelesai}</td>
          <td>{keg.jumlahAnggaran}</td>
          <td>{keg.akun}</td>
        </tr>
        ))};
        
        
      </tbody>
    </Table>
    </div>
  )
}

export default DaftarKegiatan;