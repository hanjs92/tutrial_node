import React from 'react';
import PropTypes from 'prop-types';

const foodILike =[{id:1,name:"kimchi",image:"aaa",rating:3.2},{id:2,name:"ramen",image:"bbb",rating:3},{id:3,name:"potato",image:"ccc",rating:1}];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.picture} />
// }

function Food({name, picture,rating}){
  return (
  <div> 
  <h3>I love {name} </h3>
  <p>{picture}</p>
  <h4>{rating}/5.0</h4>
  <hr></hr>
  </div>
  );
}

Food.propTypes = {
 name: PropTypes.string.isRequired,
 picture: PropTypes.string.isRequired,
 rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      <h1>HELLO!!!</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} /> )/* == {foodILike.map(renderFood)} */}
      
    </div>
  );
}

export default App;
