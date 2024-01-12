import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Main from './components/Main'
import MyFooter from './components/MyFooter'
import { useEffect, useState } from 'react';

function App() {

  const [title, setTitle] = useState('Libreria')
 
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <>
      <NavBar />
      <Main setPageTitle={setTitle}/>
      <MyFooter />
    </>
  )
}
 
export default App




