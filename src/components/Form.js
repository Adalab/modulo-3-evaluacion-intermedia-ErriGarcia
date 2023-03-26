const Form = () => {
    return <form className="form" onSubmit={handleSubmit}>

        <label htmlFor="user-text">
          Filtrar por frase
          <input 
          type="text" 
          name="user-text" 
          id="user-text"
          value={searchPhrase}
          onChange={handleSearchPhrase}
          >
          </input>
        </label>

        <label className="label" htmlFor="character">
          Filtrar por personaje
          <select 
          name="character" 
          id="character"
          value={character}
          onChange={handleSearchCharacter}>
            <option value="Todos">Todos</option>
            <option value="Ross">Ross</option>
            <option value="Monica">Monica</option>
            <option value="Joey">Joey</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Chandler">Chandler</option>
            <option value="Rachel">Rachel</option>
          </select>
        </label>
      </form>
}

export default Form