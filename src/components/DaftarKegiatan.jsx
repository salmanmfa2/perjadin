import React from 'react';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const DaftarKegiatan = () => {
  return (
    <div>
        <Table striped="columns" style={{margin:'5px', width:'1500px'}}>
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
          <td>524212</td>
          <td style={{display:'flex' , flexDirection:'row', gap:'5px'}}>
            <Button variant='dark'>Cancel</Button>
          </td>
          <td>Sudah Diverifikasi</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Monitoring BLU</td>
          <td>Raha</td>
          <td><b>Saya</b>,Teri, Beni</td>
          <td>13-04-2023</td>
          <td>15-04-2023</td>
          <td>Rp. 1.050.000</td>
          <td>524212</td>
          <td style={{display:'flex' , flexDirection:'row', gap:'5px'}}>
            <Button variant='dark'>Cancel</Button>
            <Button variant='dark'>Edit</Button>
          </td>
          <td>Belum Diverifikasi</td>
        
        </tr>
        <tr>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default DaftarKegiatan;