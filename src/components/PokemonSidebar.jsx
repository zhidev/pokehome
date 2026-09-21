import ImportPokemonForm from "./ImportPokemonForm";
import pokeball_icon from '../assets/pokeball_icon.webp'
import './PokemonSidebar.css';
import { useState } from "react"; 

function PokemonSidebar({drawMode, setDrawMode, brushColor, setBrushColor}){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    return (
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
      </aside>
    );
}

export default PokemonSidebar