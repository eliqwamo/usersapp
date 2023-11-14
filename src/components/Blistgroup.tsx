import {ListGroup, Badge} from "react-bootstrap";

const Blistgroup = (props: any) => {
  return (
    <ListGroup.Item
      key={props.user.id}
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.user.name}</div>
        {props.user.email}
        <br />
        {props.user.address.city}
      </div>
      <Badge bg="primary" pill>
        {props.user.id}
      </Badge>
    </ListGroup.Item>
  );
};

export default Blistgroup;
