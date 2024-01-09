import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import AllTheBooks from './components/AllTheBooks'
import Welcome from './components/Welcome'
import {Container, Row, Col} from 'react-bootstrap/'
import MyFooter from './components/MyFooter'

function App() {
 
  return (
    <>
      <NavBar/>
      <Container style={{ minHeight: '85vh' }}>
        <Row>
          <Welcome />
        </Row>
        <Row>
          <AllTheBooks />
        </Row>
      </Container>
      <MyFooter />
      
      
    </>
  )
}

export default App




