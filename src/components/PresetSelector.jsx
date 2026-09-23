import {useState} from "react"
import "./PresetSelector.css"
import preset1Description from "./presetdesc/preset1.txt?raw";
import preset2Description from "./presetdesc/preset2.txt?raw";
import preset3Description from "./presetdesc/preset3.txt?raw";
import preset4Description from "./presetdesc/preset4.txt?raw";
import preset5Description from "./presetdesc/preset5.txt?raw";


function PresetSelector({onApplyPreset }){
    const [selectedOption, setSelectedOption] = useState("preset1");
    const [customImage, setCustomImage] = useState(null);
    const [appliedCustomImage, setAppliedCustomImage] = useState(null);

    const presetDescriptions = {
        preset1: preset1Description,
        preset2: preset2Description,
        preset3: preset3Description,
        preset4: preset4Description,
        preset5: preset5Description,
        custom: "Upload your own background."
    };

    function handleCustomImage(event) {
        const file = event.target.files[0];
        console.log("FILE:", file);

        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {
            return;
        }

        if (customImage) {
            URL.revokeObjectURL(customImage);
        }

        //Remove the old preview only if the canvas is NOT using it.
        //So we dont accidently revoke active canvas image
        if (customImage && customImage !== appliedCustomImage) {
        URL.revokeObjectURL(customImage);
        }

        const imageUrl = URL.createObjectURL(file);
        setCustomImage(imageUrl);
    }

    function handleApplyPreset() {
        console.log("APPLY:", selectedOption, customImage);


        if (selectedOption === "custom") {
            if (!customImage) {
                return;
            }

            onApplyPreset(customImage);
            setAppliedCustomImage(customImage);

            return;
        }

        onApplyPreset(selectedOption);
    }

    return (
        <div className = "presetSelector">
            <select 
                value={selectedOption}
                onChange={(event) => {
                    const newOption = event.target.value;

                    setSelectedOption(newOption);
                        

                    if (newOption !== "custom") {
                        //if image was only preview and never applied, release temp URL
                        if (customImage && customImage !== appliedCustomImage) {
                            URL.revokeObjectURL(customImage);
                        }
                        setCustomImage(null);
                    }
                }}
            >
                <option value="preset1">Base Black</option>
                <option value="preset2">Tierlist Template</option>
                <option value="preset3">Truth</option>
                <option value="preset4">Ideals</option>
                <option value="preset5">Space</option>


                <option value="custom">Custom Upload</option>
            </select>

            <div className="presetDescription">
                <p>{presetDescriptions[selectedOption]}</p>
            </div>
            {selectedOption === "custom" && (
                <>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleCustomImage}

                    />

                    {customImage && (
                        <img
                            className="customImagePreview"
                            src={customImage}
                            alt="Custom background preview"
                        />
                    )}
                </>
                
            )}

            <button
                className="applyPresetButton"
                onClick={handleApplyPreset}
            >
                Apply Preset
            </button>

        </div>
    );


}


export default PresetSelector