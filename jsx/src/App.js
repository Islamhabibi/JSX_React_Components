import './App.css';
import Name from './Name';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {productData } from "./product"

const Product=({name,image,description,price}) =>{
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginTop:"5%"}}> 
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
         <Card.Body>
         <Card.Title>{name}</Card.Title>
         <Card.Text>{price}</Card.Text>
         <Card.Text>{description}</Card.Text>  
        </Card.Body>
      </Card>
      </div>
  )
}
const firstName = 'Islem';
function App() {
  return (
     
    <div className="product-list">
    {productData.map((product, index) => (
      <Product
        key={index}
        name={product.name}
        price={product.price}
        description={product.description}
        image={product.image}
      />
    ))}
    <p>Hello, {firstName ? firstName:  "there" }! </p>
    {firstName && <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/user-check-512.png" style={{ marginLeft: "5%", height: "40px", width: "40px" ,marginTop:"-5%"}}/>}
  </div>
  );
}

export default App;
