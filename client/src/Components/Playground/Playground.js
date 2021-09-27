import Canvas from '../Canvas/Canvas'
import SideNav from '../SideNav/SideNav';
import Zoom from '../Zoom/Zoom'
import Controls from '../Controls/Controls'
import FileTransfer from '../FileTransfer/FileTransfer'
import Movement from '../Movement/Movement';
import Settings from '../Settings/Settings'

import './Playground.css';

function Playground(props) {

  return (

    <div>
      <div className="playground">
        <SideNav selectedTile={props.selectedTile}/>
        <Canvas />
      </div>
      <Zoom />
      <Movement />
      <FileTransfer />
      <Controls />
      <Settings />
    </div>
  );
}

export default Playground;