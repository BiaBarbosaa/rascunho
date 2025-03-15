import { useState } from "react";

function MainCadastroContrato() {

    const [cod, setCod] = useState('');
    const [nome, setNome] = useState('');
    const [servicos, setServicos] = useState('');
    const [planos, setPlanos] = useState('');
    const [pagamento, setPagamento] = useState('');


    async function cadastrarContrato(event) {
        // Evita que a página seja recarregada ao submeter o formulário
        event.preventDefault();
        console.log(`O formulário foi enviado`);

        // construindo o objeto aluno
        let contrato = {
            cod, cod,
            nome: nome,
            servicos: servicos,
            planos: planos,
            pagamento: pagamento
        }
        // transformou o objeto aluno em formato de string JSON
        contrato = JSON.stringify(contrato);
        // enviamos de forma assíncrona para o backend
        try {
            let contrato = await fetch('http://localhost:8081/cadastroAluno', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: contrato
            })
            if (contrato.sucesso) {
                alert(`cliente cadastrado com sucesso`);
            }


        } catch (erro) {
            alert(`Erro ao cadastrar cliente: ${erro}`);
        }

    }


    return (
        <>

            {/* <main className="BBcor col-md-9 ms-sm-auto col-lg-10 px-md-4"> */}

            <main className="BBcor-rosa col-md-9 ms-sm-auto col-lg-10 px-md-4">

                <div className="con">
                    <div className="con2">

                    <form onSubmit={cadastrarContrato} className="row g-3">
                    <h4>Cadastro de contrato</h4>

                        <div className="col-md-5">
                            <label htmlFor="nome" className="form-label">Código do cliente:</label>
                            <input value={cod} onChange={(e) => setCod(e.target.value)} type="text" className="form-control" id="cod" name="cod" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputPassword4" className="form-label">Nome completo:</label>
                            <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="nome" name="nome" />
                        </div>
                        <div className="areas">
                            <div className="servicos">
                        <h5>Serviços adicionais</h5>
                        <div className="col-4">
                            <label htmlFor="servicos" className="form-label">Serviços:</label>
                            <select
                                value={servicos}
                                onChange={(e) => setServicos(e.target.value)}
                                className="form-control"
                                id="servicos"
                                name="servicos"
                            >
                                <option value="F">F</option>
                                <option value="M">M</option>
                            </select>
                         
                        </div>
                        </div>
                        <div className="planos">
                        <h5>Tipos de planos</h5>
                        <div className="col-4">
                            <label htmlFor="planos" className="form-label">Planos:</label>
                            <select
                                value={planos}
                                onChange={(e) => setPlanos(e.target.value)}
                                className="form-control"
                                id="planos"
                                name="planos"
                            >
                                <option value="F">F</option>
                                <option value="M">M</option>
                            </select>
                        </div>
                        </div>
                        <div className="pagamento">
                        <h5>Pagamento</h5>
                        <div className="col-4">
                            <label htmlFor="pagamento" className="form-label">Forma de pagamento:</label>
                            <select
                                value={pagamento}
                                onChange={(e) => setPagamento(e.target.value)}
                                className="form-control"
                                id="pagamento"
                                name="pagamento"
                            >
                                <option value="F">F</option>
                                <option value="M">M</option>
                            </select>
                        </div>
                        </div>
                        </div>
                        
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary botao-cadastrar">
                                <i className="bi bi-box-arrow-up "></i> Cadastrar contrato</button>
                        </div>
                    </form>
                    </div>
                </div>

            </main>

        </>
    )
}
export default MainCadastroContrato;