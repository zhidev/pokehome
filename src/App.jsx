import { useState } from 'react'
import './App.css'
import { ReactFlow, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dragonair from './Dragonair.png'
import PokemonImageNode from './pokemon/PokemonImageNode.jsx';
import {createPokemonNode, addPokemon} from './pokemon/PokemonNode.jsx'
import PokemonSidebar from './components/PokemonSidebar.jsx';
import RotomDex from './components/rotomdex/RotomDex.jsx'

import PokemonCanvas from './components/PokemonCanvas.jsx'
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
  // const [drawMode, setDrawMode] = useState(false)
  const [brushColor, setBrushColor] = useState('#9b8ec4')
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [canvasReset, setCanvasReset] = useState(false)
  const [toolMode, setToolMode] = useState("none");

// toolMode = "none"
// toolMode = "draw"
// toolMode = "erase"
  const drawMode = toolMode === "draw";
  const eraseMode = toolMode === "erase";


  function clearCanvas(){
    setPersonalNodes([])
    setCanvasReset(true);
  }

  function applyPreset(selectedPreset) {
    console.log("Applying preset:", selectedPreset);
  }

  function onSubmit(event) {
    event.preventDefault();

    const position = reactFlowInstance.screenToFlowPosition({
      x: window.innerWidth / 2,
      y: window.innerHeight * 3 / 4 
    });

    handlePokemonImport(event, setPersonalNodes, position)
  }

  return (
    
    <div>
      <PokemonCanvas
        nodes={personalNodes}
        nodeTypes={nodeTypes}
        onNodesChange={onPersonalNodesChange}
        drawMode={drawMode}
        eraseMode={eraseMode}
        brushColor={brushColor}
        canvasReset={canvasReset}
        setCanvasReset={setCanvasReset}
        setReactFlowInstance={setReactFlowInstance}
      />

      <PokemonSidebar
        toolMode={toolMode}
        setToolMode={setToolMode}
        brushColor={brushColor}
        setBrushColor={setBrushColor}
        clearCanvas={clearCanvas}
        onApplyPreset={applyPreset}
      />

      <RotomDex
        onSubmit={onSubmit}
        nodeCount={personalNodes.length}
      />

    </div>
  )

}

export default App
