import pokeball_icon from '../assets/pokeball_icon.webp'
import unown_icon from '../assets/unownquestionmark.png'
import './PokemonSidebar.css';
import { useState } from "react"; 
import HelpPopup from './HelpPopup.jsx';
import PresetSelector from "./PresetSelector.jsx";

function PokemonSidebar({toolMode, setToolMode, brushColor, 
  setBrushColor, clearCanvas, onApplyPreset}){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);

    return (
    <>
        <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button
          className="sidebarTab"
          onClick={()=> setSidebarOpen(!sidebarOpen)}>
             <img src={pokeball_icon} alt="Open sidebar" />
        </button>
        <label className="colorPickerButton">

          <div
            className="colorPickerImage"
            style={{
              '--brush-color': brushColor
            }}
          />

          <input
            type="color"
            value={brushColor}
            onChange={(event) => setBrushColor(event.target.value)}
          />

        </label>
        <div className="toolButtons">
          <button
            onClick={() =>
              // If already in draw mode, exit to "none".
              // Otherwise, switch into draw mode.
              setToolMode((current) =>
                current === "draw" ? "none" : "draw"
              )
            }
          >
            {toolMode === "draw" ? "Exit Draw Mode" : "Enter Draw Mode"}
          </button>

          <button
            onClick={() =>
              // If already in erase mode, exit to "none".
              // Otherwise, switch into erase mode.
              setToolMode((current) =>
                current === "erase" ? "none" : "erase"
              )
            }
          >
            {toolMode === "erase" ? "Exit Erase Mode" : "Enter Erase Mode"}
          </button>


          <button
            className='clearCanvasButton'
            onClick={clearCanvas}
          >
            Clear Canvas
          </button>
          <button 
            className="unknownHelpButton"
            onClick={() => setHelpOpen((current) => !current)}
          >
              <img
                src={unown_icon}
                alt="Help"
              />
          </button>
        </div>
        <PresetSelector 
          onApplyPreset={onApplyPreset}
        />

        
      </aside>
      {helpOpen && (
        <HelpPopup
          onClose={() => setHelpOpen(false)}
        />
      )}
      </>
    );
}

export default PokemonSidebar