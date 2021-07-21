import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [{
      id: Date.now(), texto: 'Tarefas a Fazer',
      completa: false
    },
    {
      id: Date.now(),
      texto: 'Tarefas Completas',
      completa: true
    }
    ],
    inputValue: '',
    filtro: '',
  }

  componentDidUpdate(prevState) {
    console.log("mudou algo");
    if (prevState.tarefas !== this.state.tarefas){
      localStorage.setItem("tarefas", this.state.tarefas);
    }
    if (prevState.inputValue !== this.state.inputValue){
      localStorage.setItem("inputValue", this.state.inputValue);
    }
    if (prevState.filtro !== this.state.tarefas){
      localStorage.setItem("filtro", this.state.filtro);
    }
  };


  componentDidMount() {
    this.capturarDados();
  };
   capturarDados = () =>{
    const tarefasN = localStorage.getItem("tarefas");
    const inputValueN = localStorage.getItem("inputValue");
    const filtroN = localStorage.getItem("filtro");

    this.setState({
      tarefas: tarefasN,
      inputValue: inputValueN,
      filtro: filtroN
    });

   }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  criaTarefa = () => {
    const novasTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const tarefasAdicionadas = [...this.state.tarefas, novasTarefa]
    this.setState({ tarefas: tarefasAdicionadas })
  }

  selectTarefa = (id) => {
    const seletorTarefas = this.state.tarefas.map((lista) => {
      if (id === lista.id) {
        const novoSeletor = {
          ...lista, completa: !lista.completa
        }
        return novoSeletor
      } else {
        return lista
      }
    })
    this.setState({ tarefas: seletorTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value });
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} 
          onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} 
          onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
