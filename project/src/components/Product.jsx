import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

function Product(props) {
  return (
    <>
      <div className="productItem">
        <img className="productImage" src={props.data.image} />
        <p className="productTitle">{props.data.title}</p>
        <p className="productPrice">{props.data.price}</p>
        <Button variant="warning">Add To Cart</Button>
      </div>
    </>
  );
}

export default Product;
