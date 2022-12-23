import Hero from "./maincontent/Hero";
import Cards  from "./maincontent/Card";
import Kegiatan from "./maincontent/Kegiatan";
import Navigation from './maincontent/Navigation.js';
import Footer from './maincontent/Footer.js';
import gambar1 from "../assets/card1.jpg";
import gambar2 from "../assets/card2.jpg";
// import gambar3 from "../assets/card3.jpg";
import './home.css'


const Home = () =>{
    return(
        <div>
            <Navigation/>
            <Hero/>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>News</h1>
                    </div>
                </div>

                <div className="row ms-auto">
                        <div className="col-lg-3 col-12">
                            <Cards image={gambar1} />
                        </div>
                        <div className="col-lg-3 col-12">
                            <Cards image={gambar2} />
                        </div>
                        <div className="col-lg-3 col-12">
                            <Cards image={gambar2} />
                        </div>
                        <div className="col-lg-3 col-12">
                            <Cards image={gambar1} />
                        </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12 my-3">
                        <Kegiatan image={gambar1}/>
                    </div>
                    <div className="col-12 my-3">
                        <Kegiatan image={gambar2}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;