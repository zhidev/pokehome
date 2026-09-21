import './HelpPopup.css';
import helpText from '../assets/helptxt.txt?raw';


function HelpPopup({ onClose }) {
  return (
    <div className="helpPopup">
      <button
        className="helpPopupClose"
        onClick={onClose}
      >
        X
      </button>

      <p>
        {helpText}
      </p>
    </div>
  );
}

export default HelpPopup;