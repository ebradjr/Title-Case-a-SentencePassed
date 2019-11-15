import React,{useEffect, useState} from 'react';
import Recipe from './Recipes';
//import logo from './logo.svg';
import './App.css';



//function App() {
const App = () => {

const APP_ID = '43485e36';
const APP_KEY = 'a8182769089d2e1af9c49bf57de20a7e';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {
  getRecipes();
  console.log('Fetching Data');
}, [search]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
  const data = await response.json();
  setRecipes(data.hits);
}

const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
}

  return (
    <div className="App">
     <form className="search-form">
         <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
         <button className="search-button" type="submit">Search</button>
     </form>
     {recipes.map(recipe => (
       <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
       image={recipe.recipe.image}
       />
     ))}
    </div>
  );
};

export default App;
