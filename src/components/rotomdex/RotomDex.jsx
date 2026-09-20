import {useState, useRef} from 'react'
import './RotomDex.css'
import ImportPokemonForm from '../ImportPokemonForm.jsx';
import rotomDexImage from '../../assets/rotomDex.png';
import rotomClosedImage from '../../assets/pokeball.png';
import rotomOpenedImage from '../../assets/powerbutton.png'

function RotomDex({onSubmit, nodeCount}){
    const [rotomStatus, setRotomStatus] = useState(false);
    const [position, setPosition] = useState({
        x: 100,
        y: 50
    });
    const didDrag = useRef(false)

    function startDrag(event){
          console.log("START DRAG");
        didDrag.current=false;
        //form controls what wont start dragging
        if (event.target.closest('textarea, input, .importPokemonButton')) {
            return;
        }
        const startX = event.clientX
        const startY = event.clientY


        const startPosition = {
            x: position.x,
            y: position.y
        }


        function drag(event) {
            console.log("DRAGGING", event.clientX, event.clientY);

            const moveX = event.clientX - startX;
            const moveY = event.clientY - startY;

             //If moved more than 5 units to prevent small mouse wigglies
            if (Math.abs(moveX) > 5 || Math.abs(moveY) > 5) {
                didDrag.current = true;
            }

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
            <div
                className="rotomDexWrapper"
                style={{
                    left: position.x,
                    top: position.y
                }}
            onPointerDown={startDrag}
            >
                <button
                    className="rotomDexToggleButton"
                    onClick={()=> {
                        if(didDrag.current) {
                            didDrag.current = false;
                            return;
                        }
                        setRotomStatus((current)=> !current)}
                    }
                >
                    <img
                        src={rotomStatus ? rotomOpenedImage : rotomClosedImage}
                        alt="Toggle RotomDex"
                        draggable={false}
                    />
                </button>

                <div
                    className={`rotomDex ${rotomStatus ? 'open' : 'hidden'}`}
                >
                    <img
                        className="rotomDexImage"
                        src={rotomDexImage}
                        alt=""
                        draggable={false}
                    />

                    <ImportPokemonForm
                        onSubmit={onSubmit}
                        nodeCount={nodeCount}
                    />
                </div>
            </div>
        </>
    );
}

export default RotomDex