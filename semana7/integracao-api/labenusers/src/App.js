import React from 'react'
import axios from 'axios';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const body = {
  name: "",
  email: ""
}
const id = {
  id: '',
}
const headers = {
  headers: {
    Authorization: "guilherme-jesus-lovelace"
  }
}

export default class App extends React.Component {
  state = {
    usuario: [],
    inputName: "",
    inputEmail: ""
  }

  componentDidMount = () => {
    this.pegarUsuario()
  }

  mudaInputUsuario = (event) => {
    this.setState({ inputName: event.target.value })
  }
  mudaInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }
  pegarUsuario = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ usuario: res.data })
      })
      .catch((err) => {
        console.log("deu oq?".catch)
        alert(err.data.message)
      })
  }


  criarUsuario = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Usuario criado com sucesso");
        this.setState({ inputName: '' })
        this.setState({ inputEmail: '' })
        this.pegarUsuario()
      })
      .catch((err) => {
        alert("Deu certo não amigão!", err.response.data)

      })
  }
  deleteUsuario = (id) => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id'
    
    axios
      .delete(url,headers,id)
      .then((res) => {
        alert("Deletado com sucesso!")
        this.setState({ usuario:[]})
        this.pegarUsuario()
      })
      .catch((err) => {
        alert("Clique para apagar novamente!", err.response.data)
      })

  }


  render() {
    const componentesUsuarios = this.state.usuario.map((users) => {
      return <li key={users.id}> {users.name}
      <button onClick={()=> this.deleteUsuario(users.id)}></button>
      </li>
    })
    

    return (
      <div>
        <h1>Labenusers</h1>
        <input
          value={this.state.inputName}
          onChange={this.mudaInputUsuario}
        />
        <input
          value={this.state.inputEmail}
          onChange={this.mudaInputEmail}
        />
        <button onClick={this.criarUsuario}>Cadastrar</button>
        {componentesUsuarios}
     </div>
    )

  }

}
