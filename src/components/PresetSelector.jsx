import {useState} from "react"
import "./PresetSelector.css"
import preset1Description from "./presetdesc/preset1.txt?raw";
import preset2Description from "./presetdesc/preset2.txt?raw";
import preset3Description from "./presetdesc/preset3.txt?raw";

function PresetSelector({onApplyPreset }){
    const [selectedOption, setSelectedOption] = useState("preset1");
    const presetDescriptions = {
        preset1: preset1Description,
        preset2: preset2Description,
        preset3: preset3Description
    };

    return (
        <div className = "presetSelector">
            <select 
                value={selectedOption}
                onChange={(event) => setSelectedOption(event.target.value)}
            >
                <option value="preset1">Preset 1</option>
                <option value="preset2">Preset 2</option>
                <option value="preset3">Preset 3</option>

            </select>

            <div className="presetDescription">
                <p>{presetDescriptions[selectedOption]}</p>
            </div>

            <button
                className="applyPresetButton"
                onClick={() => onApplyPreset(selectedOption)}
            >
                Apply Preset
            </button>

        </div>
    );


}


export default PresetSelector