import React, {useState, useEffect} from "react";
import superheroes from './superheroes.jpg'
import './App.css';
import FormBlock from "./components/formBlock";
import EditBlock from "./components/editBlock";
import DeleteBlock from "./components/deleteBlock";

function App() {

  const [data, setData] = useState([]);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    fetch('/superheroes', {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(async response => {
      return setData(await response.json())
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <div className="img-logo-block">
          <span className="page-name" >THE SUPERHEROES LIST</span>
          <img className='superheroes-logo' src={superheroes} alt="superheroes-logo" />
        </div>

        <FormBlock />

        <div className="superheroes-list">
        {
            !data ? "loading" : data.map(el => {
              const text = <div className="superhero-block">
                  <img className={`superhero-image`} scr={el.image} alt={`superhero-${el.nickname}`} ></img>
                  <div className="superhero-information">
                    <p>{`Nickname: ${el.nickname}`}</p>
                    <p>{`Real name: ${el.real_name}`}</p>
                    <p>{`Description: ${el.origin_description}`}</p>
                    <p>{`Superpowers: ${el.superpowers}`}</p>
                    <p>{`Catch phrase: ${el.catch_phrase}`}</p>
                    {/* <button className="edit-btn" onClick={() => editForm()}>Edit</button> */}
                    <div className="btn-block" >
                      <EditBlock />
                      <DeleteBlock />
                    </div>  
                    
                  </div>
              </div>
              return text
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
