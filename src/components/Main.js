const Main = () => {
    return <main>
        <ul className="unordered-list">
          {renderPhrases()}
        </ul>

        <h2 className="title-add">Añadir una nueva frase</h2>
        <form className="form-add" onSubmit={handleSubmit}>
        <label htmlFor="user-add-phrase" value="frase">
          Frase
          <input 
          type="text" 
          name="quote" 
          id="user-add-phrase"
          value={newPhrase.quote}
          onChange={handleInput}
          />
        </label>
        <label className="label" htmlFor="user-add-character" value="Personaje">
          Personaje
          <input 
          type="text"
          name="character"
          id="user-add-character"
          value={newPhrase.character}
          onChange={handleInput}
          />
        </label>
        <input 
        type="button"
        value="Añadir nueva frase"
        onClick={handleClick}
        />
        </form>
      </main>
}

export default Main