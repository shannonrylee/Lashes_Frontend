import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



const HowTo = () => {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="../assets/glue.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="../assets/lash.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
      </Card>
          <Card>
        <Card.Img variant="top" src="../assets/press.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default HowTo;