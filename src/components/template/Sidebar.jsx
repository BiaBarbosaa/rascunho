import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary ">
                <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="sidebarMenuLabel">SENAI</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                        <ul className="nav flex-column">
                            <li className="mb-1">
                                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                    Clientes
                                </button>
                                <div className="collapse" id="dashboard-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li className="nav-item"><Link to="/cadastrar-cliente" className="nav-link  d-inline-flex text-decoration-none rounded">Cadastrar cliente</Link></li>
                                        <li className="nav-item"><Link to="/listar-cliente" className="nav-link  d-inline-flex text-decoration-none rounded">Listar cliente</Link></li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                        <hr className="my-3" />
                        <ul className="nav flex-column mb-auto">
                        </ul>
                    </div>
                    

                    <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                        <ul className="nav flex-column">
                            <li className="mb-1">
                                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                    Contrato
                                </button>
                                <div className="collapse" id="dashboard-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li className="nav-item"><Link to="/cadastrar-contrato" className="nav-link  d-inline-flex text-decoration-none rounded">Cadastro contrato</Link></li>
                                        <li className="nav-item"><Link to="/listar-contrato" className="nav-link  d-inline-flex text-decoration-none rounded">listar contrato</Link></li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                        <hr className="my-3" />
                        <ul className="nav flex-column mb-auto">

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center gap-2" href="/">
                                    <svg className="bi"></svg>
                                    Sair
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </>
    );
}
export default Sidebar;