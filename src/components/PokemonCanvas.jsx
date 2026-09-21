import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import DrawingLayer from './DrawingLayer';


const CANVAS_EXTENT = [
    [-700, -700],
    [1800, 700]
];

function PokemonCanvas({nodes, nodeTypes, onNodesChange, drawMode, brushColor, setReactFlowInstance}){
    return (
        <div style={{ width: '100vw', height: '90vh' }}>
            <ReactFlow 
            nodes={nodes} 
            edges={[]} 
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onInit={setReactFlowInstance}
            panOnDrag={!drawMode}
            //if draw mode, nodes shouldnt be draggable. so if not draw mode can drag
            nodesDraggable={!drawMode}
            translateExtent={CANVAS_EXTENT}
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