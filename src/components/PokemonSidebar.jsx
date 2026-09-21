import ImportPokemonForm from "./ImportPokemonForm";
import pokeball_icon from '../assets/pokeball_icon.webp'
import './PokemonSidebar.css';
import { useState } from "react"; 

function PokemonSidebar({drawMode, setDrawMode}){
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

        <div className="sidebarSettings">
          <button
             onClick={() => setDrawMode((current) => !current)}
          >
            {drawMode ? 'Exit Draw Mode' : 'Enter Draw Mode'}
          </button>

        </div>
      </aside>
    );
}

export default PokemonSidebar