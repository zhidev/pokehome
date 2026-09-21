import pokeball_icon from '../assets/pokeball_icon.webp'
import unown_icon from '../assets/unownquestionmark.png'
import './PokemonSidebar.css';
import { useState } from "react"; 
import HelpPopup from './HelpPopup.jsx';

function PokemonSidebar({drawMode, setDrawMode, brushColor, setBrushColor}){
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

        {/* <div className="sidebarSettings">
            <button
              onClick{ ()=> setDrawMode((current) => !current)}
            >
              {drawMode ? 'Exit Draw Mode' : 'Enter Draw Mode'}
            </button>
        </div> */}


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
        <div className="sidebarSettings">
          <button
             onClick={() => setDrawMode((current) => !current)}
             
          >
            {drawMode ? 'Exit Draw Mode' : 'Enter Draw Mode'}
          </button>

          {/* <div className="colorPickerImage">
            <input
              type="color"
              value={brushColor}
              onChange={(event) => setBrushColor(event.target.value)}
            />

          </div> */}

        </div>
        <button 
          className="unknownHelpButton"
          onClick={() => setHelpOpen((current) => !current)}
        >
            <img
              src={unown_icon}
              alt="Help"
            />
        </button>
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