import { useState } from "react"

import {useReactFlow, ViewportPortal } from '@xyflow/react'
import smearglePaint from '../assets/smeargle.png'

function DrawingLayer({drawMode}){
    //strokes = finished drawing/strokes
    const [strokes, setStrokes] = useState([])
    //current active drawing
    const [activeStroke, setActiveStroke] = useState(null)

    //activate drawing layer
    const {screenToFlowPosition } = useReactFlow();

    function startDrawing(event){
        if (!drawMode)
            return;

        /* moue to grab browser coordinates */
        const point = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY
        })
        console.log("START POINT:", point);
        /*starts new stroke, coordinate location of the mouse within the canvas notthe browser*/       
        setActiveStroke([point]);
        event.currentTarget.setPointerCapture(event.pointerId);

    } /* end of start drawing */

    function draw(event){
        if(!drawMode || !activeStroke)
            return

        const point = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY
        });
        console.log("DRAW POINT:", point);
        
        /* state modifier*/       
        setActiveStroke((currentStroke) => [
            ...currentStroke,
            point
        ]);
    } /*end of draw */



    function stopDrawing(){
        console.log("STOP DRAWING");

        if (!activeStroke)
            return

        setStrokes((paintedStrokes) => [
            ...paintedStrokes,
            activeStroke
        ]);
        //done actively drawing
        setActiveStroke(null);
    }//Stop drawing

    return (
        <>
            <ViewportPortal>
                <svg
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        overflow: 'visible',
                        pointerEvents: 'none',
                    }}
                >
                    {strokes.map((stroke,index) => (
                        <polyline
                            key={index}
                            points={stroke
                                .map((point) => `${point.x},${point.y}`)
                                .join(' ')
                            }
                            fill="none"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    ))}
                    {/* strokes.map */}

                    {activeStroke && (
                        <polyline
                            points={activeStroke
                                .map((point) => `${point.x},${point.y}`)
                                .join(' ')}
                            fill="none"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    )}
                    {/*activeStroke*/}
                </svg>
            </ViewportPortal>

            {/*start of drawMode */}
            {drawMode && (
                <div
                    onPointerDown={startDrawing}
                    onPointerMove={draw}
                    onPointerUp={stopDrawing}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 10,
                        cursor: `url(${smearglePaint}) 4 28, crosshair`,
                        touchAction: 'none'
                    }}
                />
            )}
        </>
    )//end return
}


export default DrawingLayer;