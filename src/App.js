import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const nayoks = [
    "Anwar",
    "jafor",
    "Alomgir",
    "Salman",
    "Razzak",
    "shovo",
    "Shakib"
  ];
  const products = [
    {
      name: "photoshop",
      price: "$99.99"
    },
    {
      name: "Illustrator",
      price: "$60.99"
    },
    {
      name: "PDF Reader",
      price: "$99.99"
    },
    {
      name: "Premiere El",
      price: "$299.99"
    }
  ];
  // const nayokName = nayoks.map((nayok) => nayoks);
  // const productNames = products.map((product) => product.name);
  // console.log(productNames);
  // console.log(nayokName);
  return (
    <div className="App">
      {/* <h1>I am a react person</h1> */}
      <Counter></Counter>
      <Users></Users>
      {/* <Product name={products[0].name} price={products[0].price}></Product>
      <ul>
        {nayoks.map((nayok) => (
          <li>{nayok}</li>
        ))}
        {products.map((product) => (
          <li>{(product.name, product.price)}</li>
        ))} */}
      {/* <li>{nayoks[0]}</li>
        <li>{nayoks[1]}</li>
        <li>{nayoks[2]}</li>
        <li>{nayoks[3]}</li> */}
      {/* </ul> */}

      {/* {products.map((prod) => (
        <Product product={prod}></Product>
      ))} */}

      {/* <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product> */}
      {/* <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person> */}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handelIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handelIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3> Dynamic: {users.length} </h3>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
// function Product(props) {
//   const productStyle = {
//     border: "1px solid gray",
//     borderRedius: "5px",
//     backgroundColor: "lightgray",
//     height: "200px",
//     weight: "200px"
//     // float: "left"
//   };
//   const { name, price } = props.product;
//   console.log(name, price);
//   return (
//     <div style={productStyle}>
//       <h3>{name}</h3>
//       <h1>{price}</h1>
//       <button>BUY NOW</button>
//     </div>
//   );
// }
// function Person() {
//   const personStyle = {
//     border: "2px solid red",
//     margin: "10px"
//   };
//   return (
//     <div style={personStyle}>
//       <h1>Name: Sakib Al Hassan</h1>
//       <h3>Hero Of The Year</h3>
//     </div>
//   );
// }
