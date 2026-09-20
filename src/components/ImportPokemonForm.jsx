import rotomPowerButton from "../assets/powerbutton.png"
import rotomEnterButton from "../assets/EnterArrow.png"

function ImportPokemonForm({onSubmit, nodeCount}){
    return(
        <form 
          className="importPokemonForm"
          onSubmit={onSubmit}  
        >
        <textarea 
          id="importField"
          placeholder="Import your Pokemon here"
          name="importField"
        />
        <button 
          type="submit"
          className="importPokemonButton"
        >
           <img
              src={rotomEnterButton}
              alt="Add Pokemons"
           />
        </button> {nodeCount}
      </form>
    )
}

export default ImportPokemonForm