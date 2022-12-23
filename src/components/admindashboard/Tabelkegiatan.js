import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import NavAdmin from "../halamanadmin/NavAdmin.js";
import { ProSidebarProvider } from 'react-pro-sidebar';


const Tabeladmin = () => {

    const [tabel, setTabel] = useState([]);

    useEffect(() => {
        getTabel();
    }, []);

    const getTabel = async () => {
        const response = await axios.get("http://localhost:3001/tabel");
        setTabel(response.data)
    };

    const deleteTabel = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/tabel/${id}`);
            getTabel();
        } catch (error) {
            console.log(error);
        }
    };

    const tkn = localStorage.getItem('tkn')


    if (!tkn) {
        return <Navigate to="/login" />
    }

    return (
        <div style={{ display: 'flex', flexDirection: "row" }}>
            <ProSidebarProvider>
                <NavAdmin />
            </ProSidebarProvider>
            <div className="container my-5">
                <Link to="/dashboard/add">
                    <Button variant="primary" className="mb-2">Add</Button>
                </Link>
                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr className="text-center">
                            <th>No.</th>
                            <th>Nama Kegiatan</th>
                            <th>Tanggal Mulai</th>
                            <th>Tanggal Selesai</th>
                            <th>Keterangan</th>
                            <th>Action</th>
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
                                <td>
                                    <Link to={`/dashboard/edit/${tabel._id}`}>
                                        <Button variant="info" className="mx-2">Edit</Button>
                                    </Link>
                                    <Button onClick={() => deleteTabel(tabel._id)} variant="danger">Delete</Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>

        </div>


    );
}

export default Tabeladmin;