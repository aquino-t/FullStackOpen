import { useState } from 'react'

const Historico = (props) => {
  if (props.todosOsCliques.length === 0) {
    return (
      <div>
        Clique em um dos botões para usar a aplicação!
      </div>
    )
  }
  return (
    <div>
      Histórico de cliques nos botões: {props.todosOsCliques.join(' ')}
    </div>
  )
}

const Botao = ({ handleClique, texto }) => (
  <button onClick={handleClique}>
    {texto}
  </button>
)

const App = () => {
  const [valor, setValor] = useState(10)
  

  const setNoValor = (novoValor) => () => {
    console.log('setValor atual', novoValor)  // Imprime o novo valor no console
    setValor(novoValor)
  }
  
  return (
    <div>
      {valor}

      <button onClick={setNoValor(1000)}>mil</button>
      <button onClick={setNoValor(0)}>zerar</button>
      <button onClick={setNoValor(valor + 1)}>incrementar</button>
    </div>
  )
}

export default App