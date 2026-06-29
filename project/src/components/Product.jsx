import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Product(props) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.data.image} className="productImg" />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
            {props.data.price}
          </Card.Text>
          <Button variant="primary">View Product</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
