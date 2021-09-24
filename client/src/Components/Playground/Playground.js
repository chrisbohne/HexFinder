import Canvas from '../Canvas/Canvas'
import SideNav from '../SideNav/SideNav';
import Zoom from '../Zoom/Zoom'
import Controls from '../Controls/Controls'
import FileTransfer from '../FileTransfer/FileTransfer'
import Movement from '../Movement/Movement';
import { PlaygroundContext } from '../../Contexts/Playground';
import { useState } from 'react';
import Graph from '../../helpers/graph'

import './Playground.css';

function Playground() {

  const [selectedTile, setSelectedTile] = useState({svg: '', category: '', connections: []});
  const [zoom, setZoom] = useState(1)
  const [vertical, setVertical] = useState(0)
  const [horizontal, setHorizontal] = useState(0)
  const map = new Graph()
  const value = {
    selectedTile,
    setSelectedTile,
    zoom,
    setZoom,
    vertical,
    setVertical,
    horizontal,
    setHorizontal,
    map
  }


  function addElement() {
  }

  return (
    <PlaygroundContext.Provider value={value}>
      <div className="playground">
        <SideNav selectedTile={selectedTile}/>
        <Canvas  addElement={addElement}/>
      </div>
      <Zoom />
      <Movement />
      <Controls />
      <FileTransfer />
    </PlaygroundContext.Provider>
  );
}

export default Playground;