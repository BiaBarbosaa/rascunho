/* Usando CSS como modulo */
//import style from './Home.module.css'

import './Home.css'
import Navbar from '../../template/Navbar';
import Sidebar from '../../template/Sidebar';
import Grafico from '../../Grafico';

function Home() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <Grafico />

                </div>
            </div>
        </ >
    );
}
export default Home;