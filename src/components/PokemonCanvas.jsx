import { ReactFlow,ViewportPortal } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import DrawingLayer from './DrawingLayer';
import './PokemonCanvas.css';

const CANVAS_EXTENT = [
    [-700, -700],
    [1800, 700]
];

function PokemonCanvas({nodes, nodeTypes, onNodesChange, drawMode, eraseMode, brushColor, 
    canvasReset, setCanvasReset, setReactFlowInstance, canvasBackground}){
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
                {/* background for present*/}
                {canvasBackground && (
                    <ViewportPortal>
                        <div
                            className={`canvasBackground ${canvasBackground}`}
                        />
                    </ViewportPortal>
                )}

                <DrawingLayer 
                    drawMode={drawMode} 
                    eraseMode={eraseMode}
                    brushColor={brushColor}
                    canvasReset={canvasReset}
                    setCanvasReset={setCanvasReset}
                />
            </ReactFlow>
        </div>
    );
}

export default PokemonCanvas