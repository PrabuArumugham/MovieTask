import React, { useState } from 'react';
import './App.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import popupBox from './popupBox';
import Popup from 'reactjs-popup';
//import popupBox from './popupBox';
//import { useState } from 'react';

function App() {

  const dataList = [
    {
      "id": 1,
      "name": "Titanic",
      "year": 1997,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./titanic.jpg"
    },
    {
      "id": 2,
      "name": "Karate Kid",
      "year": 2010,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./Karate_kid.jpg"
    },
    {
      "id": 3,
      "name": "Spider-Man",
      "year": 2002,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./SpiderMan.jpg"
    },
    {
      "id": 4,
      "name": "Hulk",
      "year": 2003,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./Hulk.jpg"
    },
    {
      "id": 5,
      "name": "Avatar",
      "year": 2009,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./avatar.jpg"
    },
    {
      "id": 6,
      "name": "avengers",
      "year": 2012,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./avengers.jpg"
    },
    {
      "id": 7,
      "name": "Captain America",
      "year": 2011,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./captain.jpg"
    },
    {
      "id": 8,
      "name": "Ant Man ",
      "year": 2015,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./antman.jpg"
    },
    {
      "id": 9,
      "name": "Batman",
      "year": 1949,
      "Language": "English",
      "Production‎": "MarvelStudios",
      "src":"./batman.jpg"
    },
    {
      "id": 10,
      "name": "Fantastic Four",
      "year": 2005,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./fantastic4.jpg"
    },
    {
      "id": 11,
      "name": "Thor",
      "year": 2011,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./thor.jpg"
    },
    {
      "id": 11,
      "name": "Iron Man.jpg",
      "year": 2008,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./IronMan.jpg"
    },
    {
      "id": 11,
      "name": "Black Panther",
      "year": 2008,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./BlackPanther.jpg"
    },
    {
      "id": 11,
      "name": "Iron Man.jpg",
      "year": 2008,
      "Language": "English",
      "Production‎":"MarvelStudios",
      "src":"./IronMan.jpg"
    }
  ];

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);
  const [isVales, setIsVales] = useState(false);


 
  const excludeColumns = ["id", "color"];

  
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };
 
 const showBox=()=>{
  setIsVales(!true)
  //alert(isVales);
 }

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }
  return (
    
    <div >
  
   Search: <input
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <div className="box-container" >
        {data.map((d, i) => {
      return <div key={i} className="box" style={{ backgroundColor: '#ffffff' }} onClick={showBox}>
            <img src={d.src}/>
            <b>Movie Name: </b>{d.name}<br />
            <b>Year:</b>{d.year}<br />
            <b>Language:</b>{d.Language}<br />
            <b>Production:Marvel</b><br/>
          </div>
        })}
        <div className="clearboth"></div>
        {data.length === 0 && <span>No records found to display!</span>}
      </div>
     
    </div>
  );
}

export default App;
