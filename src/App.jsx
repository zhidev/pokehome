import { useState } from 'react'
import './App.css'
import { ReactFlow, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dragonair from './Dragonair.png'
import dragapult from './Dragapult.png'
import pokeball_icon from './assets/pokeball_icon.webp'
import PokemonImageNode from './nodes/PokemonImageNode.jsx';
import {createPokemonNode, addPokemon} from './nodes/PokemonNode.jsx'
import PokemonSidebar from './components/PokemonSidebar.jsx';

import PokemonCanvas from './components/PokemonCanvas.jsx'
import ImportPokemonForm from './components/ImportPokemonForm.jsx';
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

  function onSubmit(event) {
    event.preventDefault();
    console.log(event)

    const formData = new FormData(event.currentTarget);
    const species = formData.get('importField');
    addPokemon(species, setPersonalNodes);
  }

  return (
    <div>
      <PokemonCanvas
        nodes={personalNodes}
        nodeTypes={nodeTypes}
        onNodesChange={onPersonalNodesChange}
      />

      <PokemonSidebar
        onSubmit={onSubmit}
        nodeCount={personalNodes.length}
      />
    </div>
  )

}

export default App
