import { Col, Card, Button } from 'react-bootstrap';

const Bcard = (props: any) => {
  return (
    <Col lg={3}>
      <Card style={{ marginBottom: 26 }}>
        <div style={{ width: "100%", textAlign: "center", paddingTop: 20 }}>
          <Card.Img variant="top" className="avatar" src={props.user.avatar} />
        </div>
        <Card.Body>
          <Card.Title>{props.user.name}</Card.Title>
          <Card.Text>
            <b>{props.user.email}</b>
            <br />
            {props.user.address.street}, {props.user.address.city}
            <br />
            <i>Tel: {props.user.phone}</i>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bcard;
