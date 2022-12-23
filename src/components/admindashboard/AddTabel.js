import React, {useState} from 'react'
import { Form, Button} from 'react-bootstrap'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const AddTabel = () => {

    const [nama_kegiatan, setName]          = useState("");
    const [tanggal_mulai, setTanggalMulai]  = useState("");
    const [tanggal_akhir, setTanggalAkhir]  = useState("");
    const [kegiatan, setKeterangan]         = useState("");
    const navigate = useNavigate();

    const saveTabel = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/tabel", {
                nama_kegiatan,
                tanggal_mulai,
                tanggal_akhir,
                kegiatan
            });
            navigate("/dashboard/tabelkegiatan");
        } catch (error) {
            console.log(error);
        }
    }

    const tkn = localStorage.getItem('tkn')
    
    
    if(!tkn){
        return <Navigate to ="/login" />
    }
    
  return (
     <div className='container my-5'>
        <div className='column column-half'>
            <Form onSubmit={saveTabel}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nama Kegiatan</Form.Label>
                    <Form.Control type="text" value={nama_kegiatan} onChange={(e)=> setName(e.target.value)} placeholder="Nama Kegiatan" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tanggal Mulai</Form.Label>
                    <Form.Control type="date" value={tanggal_mulai} onChange={(e)=> setTanggalMulai(e.target.value)} placeholder="Tanggal Mulai" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tanggal Selesai</Form.Label>
                    <Form.Control type="date" value={tanggal_akhir} onChange={(e)=> setTanggalAkhir(e.target.value)} placeholder="Tanggal Selesai" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Keterangan</Form.Label>
                    <Form.Control as="textarea" value={kegiatan} onChange={(e)=> setKeterangan(e.target.value)} rows={3} placeholder="Keterangan" />
                </Form.Group>
                <Button type="submit" variant="primary"> Save </Button>
                <Link to="/dashboard/tabelkegiatan">
                    <Button variant="danger" className='mx-2'> Back </Button>
                </Link>
            </Form>
            
        </div>
     </div>
  )
}

export default AddTabel;