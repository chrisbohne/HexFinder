import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Playground from './Components/Playground/Playground';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import { PlaygroundContext } from './Contexts/Playground';
import { useEffect, useState, useRef } from 'react';
import Graph from './helpers/graph';
import {createGrid} from './helpers/grid';

import './App.css';

function App() {
  // const data = [{name:'villageSVG', x:0, y:86.6, category: 'city'}, {name:'street10SVG', x:0, y:0, category: 'street'}];
  const [selectedTile, setSelectedTile] = useState({name: '', svg: '', category: '', connections: []});
  const [zoom, setZoom] = useState(1)
  const [vertical, setVertical] = useState(0)
  const [horizontal, setHorizontal] = useState(0)
  const [map, setMap] = useState(new Graph())
  const [dataToStore, setDataToStore] = useState([])
  const [loadedData, setLoadedData] = useState([
    {name:'villageSVG', x:0, y:86.6, category: 'city'},
    {name:'street10SVG', x:0, y:0, category: 'street'}
  ])
  // const [currentCanvas, setCurrentCanvas] = useState('')

  const [grid, setGrid] = useState([])


  const value = {
    selectedTile,
    setSelectedTile,
    zoom,
    setZoom,
    vertical,
    setVertical,
    horizontal,
    setHorizontal,
    map,
    setMap,
    dataToStore,
    setDataToStore,
    grid,
    setGrid,
    loadedData,
    setLoadedData
  }

  useEffect(() => {
    // console.log('running')
    const gridtest = createGrid(2,2, loadedData)
    console.log(gridtest)
    setGrid(gridtest)
  },[loadedData])

  return (
    <div className="App">
      {/* {console.log(map)}
      {console.log(dataToStore)} */}
      <PlaygroundContext.Provider value={value}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/playground">
              <Playground selectedTile={selectedTile} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </PlaygroundContext.Provider>
    </div>
  );
}

export default App;
