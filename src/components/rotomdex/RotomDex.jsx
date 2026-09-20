import {useState} from 'react'
import './RotomDex.css'
import ImportPokemonForm from '../ImportPokemonForm.jsx';
import rotomDexImage from '../../assets/rotomDex.png';


function RotomDex({onSubmit, nodeCount}){
    const [rotomStatus, setRotomStatus] = useState(false);
    const [position, setPosition] = useState({
        x: 100,
        y: 50
    });

    function startDrag(event){
          console.log("START DRAG");

        const startX = event.clientX
        const startY = event.clientY

        const startPosition = {
            x: position.x,
            y: position.y
        }


        function drag(event) {
                console.log("DRAGGING", event.clientX, event.clientY);

            setPosition({
                x: startPosition.x + event.clientX - startX,
                y: startPosition.y + event.clientY - startY
            });
        }

        function stopDrag(){
                console.log("STOP DRAG");

            window.removeEventListener( 'pointermove', drag)
            window.removeEventListener( 'pointerup', stopDrag)
        }

        window.addEventListener('pointermove', drag);
        window.addEventListener('pointerup', stopDrag);
    }

    

    return(
        <>
            <button
                className="rotomDexToggleButton"
                onClick={()=>setRotomStatus((current)=> !current)}
            >
                Toggle Rotom Dex TBC
            </button>

            <div
                 className={`rotomDex ${rotomStatus ? 'open' : 'hidden'}`}
                 style={{
                    left: position.x,
                    top: position.y,
                    backgroundImage: `url(${rotomDexImage})`
                 }}
            >
                <div
                    className="rotomDexDragHandle"
                    onPointerDown={startDrag}
                >
                    RotomDex
                </div>

                <ImportPokemonForm
                onSubmit={onSubmit}
                nodeCount={nodeCount}
                />
            </div>
        </>
    );
}

export default RotomDex