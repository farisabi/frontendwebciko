import React from 'react'
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from '../maincontent/Navigation';

const TabelKegiatan= () => {
    const [tabel, setTabel] = useState([]);

    useEffect(()=>{
        getTabel();
    }, []);

    const getTabel = async () => {
        const response = await axios.get("http://localhost:3001/tabel");
        setTabel(response.data)
    };
  return ( 
    <div>
        <Navigation/>
        <div className="container my-5">
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr className="text-center">
                    <th>No.</th>
                    <th>Nama Kegiatan</th>
                    <th>Tanggal Mulai</th>
                    <th>Tanggal Selesai</th>
                    <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {tabel.map((tabel, index) => (
                    <tr key={tabel._id} className="text-center">
                        <td>{index + 1}</td>
                        <td>{tabel.nama_kegiatan}</td>
                        <td>{tabel.tanggal_mulai}</td>
                        <td>{tabel.tanggal_akhir}</td>
                        <td>{tabel.kegiatan}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </Table>
        </div>
    </div>  
  )
}

export default TabelKegiatan