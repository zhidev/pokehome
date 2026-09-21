import { useState } from 'react'
import './App.css'
import { ReactFlow, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dragonair from './Dragonair.png'
import dragapult from './Dragapult.png'
import pokeball_icon from './assets/pokeball_icon.webp'
import PokemonImageNode from './pokemon/PokemonImageNode.jsx';
import {createPokemonNode, addPokemon} from './pokemon/PokemonNode.jsx'
import PokemonSidebar from './components/PokemonSidebar.jsx';
import RotomDex from './components/rotomdex/RotomDex.jsx'

import PokemonCanvas from './components/PokemonCanvas.jsx'
import ImportPokemonForm from './components/ImportPokemonForm.jsx';
import {parsePokemonImport} from './pokemon/parsePokemonImport.jsx';
import { handlePokemonImport } from './pokemon/handlePokemonImport';
const MAX_MON_NODES = 90;


/* For Default Starting Node for Testing */
const initialNodes =[   
  createPokemonNode(1, dragonair, 100, 100)
];

const nodeTypes = { 
  imageNode: PokemonImageNode
};

function App() {
  const [count, setCount] = useState(0)
  const [importText, setImportText] = useState()
  const [personalNodes, setPersonalNodes, onPersonalNodesChange] = useNodesState(initialNodes);
  const [drawMode, setDrawMode] = useState(false)
  const [brushColor, setBrushColor] = useState('black')

  function onSubmit(event) {
    handlePokemonImport(event, setPersonalNodes)
  }

  return (
    
    <div>
      <PokemonCanvas
        nodes={personalNodes}
        nodeTypes={nodeTypes}
        onNodesChange={onPersonalNodesChange}
        drawMode={drawMode}
        brushColor={brushColor}
      />

      <PokemonSidebar
        drawMode={drawMode}
        setDrawMode={setDrawMode}
        brushColor={brushColor}
        setBrushColor={setBrushColor}
      />

      <RotomDex
        onSubmit={onSubmit}
        nodeCount={personalNodes.length}
      />

    </div>
  )

}

export default App
