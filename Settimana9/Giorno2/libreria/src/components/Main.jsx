import { Container, Row } from 'react-bootstrap'
import Welcome from './Welcome'
import AllTheBooks from './AllTheBooks'

const Main = ({setPageTitle}) => {

    const retriveTitle = (newTitle) => {
        setPageTitle(newTitle)
    }

    return (
        <Container style={{ minHeight: '85vh' }}>
            <Row>
                <Welcome />
            </Row>
            <Row>
                <AllTheBooks retriveTitle={retriveTitle}/>
            </Row>
      </Container>
    )
}

export default Main