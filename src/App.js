import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const names = ["Pro Arif", "Arif Web", "Khan", "Abdullah"]
    const products = [
        { name: 'Photoshop', price: '$90.99' },
        { name: 'Illustrator', price: '$60.90' },
        { name: 'PDF Reader', price: '$6.99' }
    ]
    const productNames = products.map(product => product.name)
    // const allNames = names.map(name => name)
    // console.log(productNames);
    return (
        <div className="App">
        <header className="App-header">
            <p>I am a React Person</p>
            <Counter></Counter>
            <Users></Users>
            <ul>
                {/* <li>{allNames[0]}</li>
                <li>{allNames[1]}</li>
                <li>{allNames[2]}</li> */}
                {names.map(name => <li>{name}</li>)}
                {products.map(product => <li>{product.name}</li>)}
            </ul>
            
            {
                products.map(pd => <Product product={pd}></Product>)
            }
            {/* <Product product={products[0]}></Product>
            <Product product={products[1]}></Product>
            <Product product={products[2]}></Product> */}
            {/* <Product name={products[0].name} price={products[0].price}></Product>
            <Product name={products[1].name} price={products[1].price}></Product>
            <Product name={products[2].name} price={products[2].price}></Product> */}

            {/* <Person name={names[0]} job="Student"></Person>
            <Person name={names[1]}></Person>
            <Person name="Khan"></Person> */}


            
            {/* <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product> */}
        </header>
        </div>
    );
}


function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return(
        <div>
            <h3>Dynamic Users: {users.length}</h3>
            <ul>
                {console.log(users)}
                {users.map(user => <li>{user.email}</li>)}
            </ul>
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(10)
    // const handlerIncrease = () => setCount(count+1)
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
            {/* <button onClick={handlerIncrease}>Increase</button> */}
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

function Product(props) {
    const productStyle = {
        border: "1px solid gray",
        borderRadius: "5px",
        backgroundColor: "lightgray",
        height: "200px",
        width: "300px",
        float: "left"
    }
    
    const {name, price} = props.product
    // console.log(name, price);
    return (
        <div style={productStyle}>
            <h3>{name}</h3>
            <h5>{price}/mo</h5>
            {/* <h3>{props.product.name}</h3>
            <h2>{props.product.price}/mo</h2> */}
            {/* <h3>{props.name}</h3>
            <h2>{props.price}/mo</h2> */}
            <button>Buy now</button>
        </div>
    )
}

function Person(props) {
    const personStyle = {
        border: "2px solid red",
        margin: "10px",
        width: "800px"
    }
    
    return (
        <div style = {personStyle}>
            <h2>Name: {props.name}</h2>
            <h5>Hero of: {props.job}</h5>
        </div>
    )
}


export default App;
