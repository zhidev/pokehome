function ImportPokemonForm({onSubmit, nodeCount}){
    return(
        <form 
          className="importPokemonForm"
          onSubmit={onSubmit}  
        >
        <label htmlFor="importField">
           File in your Mons here
        </label>
        <textarea 
          id="importField"
          placeholder="Import your Pokemon here"
          name="importField"
        />
        <button type="submit">
           Add Pokemon
        </button> {nodeCount}
      </form>
    )
}

export default ImportPokemonForm