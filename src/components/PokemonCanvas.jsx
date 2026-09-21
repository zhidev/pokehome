import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import DrawingLayer from './DrawingLayer';



function PokemonCanvas({nodes, nodeTypes, onNodesChange, drawMode, brushColor}){
    return (
        <div style={{ width: '100vw', height: '90vh' }}>
            <ReactFlow 
            nodes={nodes} 
            edges={[]} 
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            panOnDrag={false}
            //if draw mode, nodes shouldnt be draggable. so if not draw mode can drag
            nodesDraggable={!drawMode}
            >
                <DrawingLayer 
                    drawMode={drawMode} 
                    brushColor={brushColor}
                />
            </ReactFlow>
        </div>
    );
}

export default PokemonCanvas