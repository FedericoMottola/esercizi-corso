import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ListButtons from './ListButtons';


const AllTheBooks = () => {
  const [list, setList] = useState([]);
  
  return (
    <>
     <ListButtons setList={setList} />

    <div className="d-flex justify-content-between flex-wrap">
    {list.map((book) => 
    <Card key={book.asin} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          {book.price} €
        </Card.Text>
        <Button variant="primary">Compra ora</Button>
      </Card.Body>
    </Card>
  )}
   </div>
   </>
  )
  };
export default AllTheBooks;