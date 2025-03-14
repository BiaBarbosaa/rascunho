import NotFound from "./components/paginas/404/NotFound";
import CadastrarCliente from "./components/paginas/cliente/CadastrarCliente";
import ListarCliente from "./components/paginas/cliente/ListarCliente"
import EditarCliente from "./components/paginas/cliente/EditarCliente"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <Route path="/listar-Cliente" element={<ListarCliente/>} />
          <Route path="/cadastrar-Cliente" element={<CadastrarCliente/>} />
          <Route path="/editar-aluno/:id" element={<EditarCliente/>} />
          {/*Rota para página 404*/}
          <Route path="*" element={<NotFound/>} />
          {/*Rota para página home*/}
          <Route path="/" element={<ListarCliente/>} />
        </Routes>

    </>
  );
}

export default App;
