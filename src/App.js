// import logo from './logo.svg';
import './App.css';
import {action, comedy, horror, originals} from './urls'
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost title = 'Netflix Originals' url = {originals}/>
     <RowPost title = 'Action' isSmall url={action}/>
     <RowPost title = 'Horror' isSmall url={horror}/>
     <RowPost title = 'Comedy' isSmall url={comedy}/>
     
    </div>
  );
}

export default App;
