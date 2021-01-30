import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { findAllByTitle } from '@testing-library/react';

function App() {
  const nayoks = ['Anawer', 'Jafor', 'Bobita', 'faruk', 'Alamgir', 'Saban', 'Jasim']
 const products = [
   {name: 'Photoshop', price: '$90.99'},
   {name: 'Illustrator', price: '$60.99'},
   {name: 'Adobe Primer PRO', price: '$50.99'},
   {name: 'Adobe PDF', price: '$5.99'}
 ]
 
  return (
    <div className="App">
      <header className="App-header">

      <Counter></Counter>

      <Users></Users>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name} {product.price}</li>)
          }
        </ul>

          {
            products.map(product => <Product product = {product}></Product>)
          }

        {/* 

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        
         */}

        <Person name='Sakib Al Hasan' nikya='Shasher'></Person>
        <Person name='Rofiqul Islam' nikya='Moushumi'></Person>
        <Person name='Mustafuzur Rahman' nikya='Kona'></Person>
        <Person name='Mahamudullah' nikya='Chadni'></Person>



        
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incress</button>
      <button onClick={() => setCount(count -1)}>Decress</button>
    </div>
  )
}



function Product(props) {
  const productStyle={
    border: '2px solid yellow',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    width: '400px',
    height: '250px',
    padding: '20px',
    margin: '10px 0'
  }
  const buttonStyle={
    border: 'none',
    borderRadius: '3px',
    backgroundColor: 'tomato',
    width: '80px',
    height: '25px'
  }
 
  return(
    <div style={productStyle}>
      <h4>Name: {props.product.name}</h4>
      <h2>Price: {props.product.price}</h2>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  )
}













function Person(props) {
  const personStyle={
    border: '2px solid red',
    margin: '10px',
    padding: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h5>Nikya: {props.nikya}</h5>
    </div>
  )
}

export default App;
