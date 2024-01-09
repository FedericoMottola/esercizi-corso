import './App.css'
import ButtonFunc from './components/ButtonFunc'
import ImmagineClass from './components/ImmagineClass'

function App() {
  const url = "https://picsum.photos/500/250"
  const tagAlt = "Immagine random"

  return (
    <>
      
      <h1>Esercizio</h1>

      <ButtonFunc buttonText="Testo custom" bgColor="red" />
      <br />
      <ImmagineClass url={url} tagAlt={tagAlt} />
      
    </>
  )
}

export default App
