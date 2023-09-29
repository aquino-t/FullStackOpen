import { useState } from 'react'

const Header = () => (
    <h1>Give Feedback</h1>
)

const Statistics = () => (<h2>Statistics</h2>)

const Botao = ({ onClick, texto }) => (
  <button onClick={onClick}>
    {texto}
  </button>
)

const Exibir = ({contador, texto}) => (
    <p>{texto}<span>{contador}</span></p>
)


const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const aumentarGood = () => setGood(good + 1)
  const aumentarNeutral = () => setNeutral(neutral + 1)
  const aumentarBad = () => setBad(bad + 1)
  const mostrarTodos = () => good + neutral + bad
  const mediaVotos = () => {
    if (mostrarTodos() != 0) {
      return (good - bad) / mostrarTodos()
    }
  }
  const porcentagemPos = () => {
    if (mostrarTodos() != 0) {
      return (100*good)/mostrarTodos()
    }
  }

  return (
    <div>
      <Header />
      
      <Botao 
        onClick={aumentarGood}
        texto='GOOD'
      />
      <Botao 
        onClick={aumentarNeutral}
        texto='NEUTRAL'
      />
      <Botao 
        onClick={aumentarBad}
        texto='BAD'
      />

      <Statistics />

      <Exibir 
      contador={good}
      texto={"good: "}
      />
      <Exibir 
      contador={neutral}
      texto={"neutral: "}
      />
      <Exibir 
      contador={bad}
      texto={"bad: "}
      />
      <Exibir 
      contador={mostrarTodos()}
      texto={"all: "}
      />
      
      <Exibir 
      contador={mediaVotos()}
      texto={"average: "}
      />
        <Exibir 
      contador={porcentagemPos() + " %"}
      texto={"positive: "}
      />

    </div>
  )
  
}


export default App