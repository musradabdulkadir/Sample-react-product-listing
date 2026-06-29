function Product(props) {
  return (
    <>
      <div className="productItem">
        <img className="productImage" src={props.data.image} />
        <p className="productTitle">{props.data.title}</p>
        <p className="productPrice">{props.data.price}</p>
      </div>

      
    </>
  );
}

export default Product;
