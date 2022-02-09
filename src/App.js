import React, { useEffect, useState } from 'react';
import { Menu } from './Components/Menu';
import Api from "./services/api";
import './style.css';

function App() {
  const [ pokemons, setPokemons ] = useState([])
  const [ count, setCount ] = useState()
  const [ nextPage, setNextPage ] = useState();
  const [ previousPage, setPreviousPage ] = useState();

  function nextListPokemonPage(){
    Api.get(nextPage)
    .then(({data}) => {
      setPokemons(data.results)
      setNextPage(data.next)
      setPreviousPage(data.previous)

      console.log(data)
      //console.log(data.results)
    })
  }

  console.log(previousPage)
  function previousListPokemonPage(){
    Api.get(previousPage)
    .then(({data}) => {
      setPokemons(data.results)
      setNextPage(data.next)
      setPreviousPage(data.previous)
      //console.log(data)
      //console.log(data)
    })
  }

  useEffect(() => {

    Api.get('https://pokeapi.co/api/v2/pokemon')
    .then(({data}) => {
      setPokemons(data.results)
      setNextPage(data.next)
      setPreviousPage(data.previous)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(nextPage)

  return (
    <div>
      <Menu />
    
      <div className='mainContainer'>

        {pokemons.map((i) => {
          return(
            <div className='listContainer'>
              <div>
                {i.name}
              </div>
            </div>
          );
        })} 

        <button onClick={ previousListPokemonPage} >Previous</button>
        <button onClick={nextListPokemonPage}>Proximo</button>
        
      </div>
    </div>
  );
}

export default App;
