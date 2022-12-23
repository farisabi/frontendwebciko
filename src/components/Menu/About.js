import React from 'react'
import Navigation from '../maincontent/Navigation'
import biro from '../../assets/biro.png'
import './about.css'

const About = () => {
  return (
    <div>
        <Navigation/>
        <div className="container" >
            <div className="row">
                <div className="my-4 text-center">
                  <h1>About</h1>
                  <img src={biro} alt="Gedung Polda" className='my-2' />
                </div>
                <div className="row text text">
                  <p className="my-3 p">Biro Sumber Daya Manusia Polisi Daerah Riau adalah salah satu Satuan Kerja pelaksanaan tugas membina dan melaksanakan fungsi manajemen bidang Sumber Daya Manusia yang meliputi penyediaan, penggunaan, perawatan, pemisahaan dan penyaluran personel, rekrutmen jabatan terbuka melalui Assesment, Psikologi Kepolisian, Mapping Psikologi dan Upaya Peningkatan kesejahteraan personel di lingkungan Polisi Daerah Riau serta perubahan mindset dan Cultureset.</p>
                  <p className='p'>Bag Dalpers merupakan sub satuan kerja di Biro Sumber Daya Manusia Polisi Daerah Riau yang terletak di gedung utama Polisi Daerah Riau lantai 2 yang bekerja dalam bidang Sumber Daya Manusia Kepolisian Daerah Riau, pada Subbag Dalpers berfungsi sebagai pelayanan terhadap public dalam bentuk penerimaan calon anggota polisi yang akan mendaftarkan diri mereka ke Kepolisian Daerah Riau dengan beberapa persyaratan yang dibutuhkan sesuai dengan standart penilaian di Kepolisian Daerah Riau.</p>
                </div>
                <div className='text-center my-5 ' >
                  <h1>Visi & Misi</h1>
                  <p style={{fontSize: "20px"}}>Adapun visi dan misi dari Bag Dalpers Biro Sumber Daya Manusia Polisi Daerah Riau sebagai berikut :</p>
                  <h3 className='my-4'>Visi</h3>
                  <p style={{fontSize: "15px"}}>“Terwujudnya Sumber Daya Manusia Polri yang Profesional melalui kinerja yang berprestasi dan inovatif”</p>
                  <h3 className='my-4'>Misi</h3>
                  <ol>
                    <li>Mewujudkan Sumber Daya Manusia Polri yang berkualitas dan berdaya saing</li>
                    <li>Menyelenggarakan manajemen Sumber Daya Manusia dengan sistem yang Profesional, Modern, dan Terpercaya (Promoter).</li>
                  </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About