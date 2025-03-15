import NotFound from "./components/paginas/404/NotFound";
import CadastrarCliente from "./components/paginas/cliente/CadastrarCliente";
import ListarCliente from "./components/paginas/cliente/ListarCliente"
import EditarCliente from "./components/paginas/cliente/EditarCliente"

import CadastrarContrato from "./components/paginas/contrato/CadastrarContrato";
import ListarContrato from "./components/paginas/contrato/ListarContrato";
import EditarContrato from "./components/paginas/contrato/EditarContrato";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <Route path="/listar-cliente" element={<ListarCliente/>} />
          <Route path="/cadastrar-cliente" element={<CadastrarCliente/>} />
          <Route path="/editar-cliente/:id" element={<EditarCliente/>} />

          <Route path="/listar-contrato" element={<ListarContrato/>} />
          <Route path="/cadastrar-contrato" element={<CadastrarContrato/>} />
          <Route path="/editar-contrato/:id" element={<EditarContrato/>} />

          {/*Rota para página 404*/}
          <Route path="*" element={<NotFound/>} />
          {/*Rota para página home*/}
          <Route path="/" element={<ListarCliente/>} />
        </Routes>

    </>
  );
}

export default App;
