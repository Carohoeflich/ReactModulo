import './App.css';
import React from 'react';
import Foco from './ejemplo/Foco';
import FilaFocos from './ejemplo/FilaFocos';
import FocoMercurial from './ejemplo/FocoMercurial';
import Fila3Focos from './ejemplo/Fila3Focos';

function App() {

  return (
    <div id="techo">
    <Foco></Foco>
    <FocoMercurial></FocoMercurial>
    <FilaFocos></FilaFocos>
        <FocoMercurial></FocoMercurial>
    <Fila3Focos></Fila3Focos>
    </div>
  );
}

export default App;
