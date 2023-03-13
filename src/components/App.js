import '../styles/App.scss'
import { useState, useEffect } from 'react'
import callToApi from '../services/api'

const App = () => {
  // States varibales
  const [results, setResults] = useState([])
  const [searchPhrase, setSearchPhrase] = useState('')
  const [character, setCharacter] = useState('')
  const [newPhrase, setNewPhrase] = useState(
    {
      quote: "",
      character: ""
    }
  )


  // Fetch

  useEffect(() => {
  callToApi().then((response) => {
    setResults(response)
  })
  }, [])


  // Events

  const handleSearchPhrase = (ev) => {
    setSearchPhrase(ev.target.value)
  }

  const handleSearchCharacter = (ev) => {
    const inputValue = ev.target.value
    if (inputValue === 'Todos') {
      setCharacter()
    }
    setCharacter(inputValue)
  }

  const handleInput = (ev) => {
    const inputValue = ev.target.value
    const inputName = ev.target.name
    setNewPhrase({...newPhrase, [inputName]: inputValue})
  }

  const handleClick = (ev) => {
    if (!newPhrase) {
      setResults([...results, newPhrase])
      setNewPhrase({
        quote: "",
        character: ""
      })
    }
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }


  // Functions to render

  const renderPhrases = () => {
    return (results
      .filter(result => result.character.includes(character))
      .filter(result => result.quote.toLowerCase().includes(searchPhrase.toLowerCase()))
      .map((result, index) => {
      return <li key={index}>
        <p>{result.quote}</p>
        <span>{result.character}</span>
      </li>
    }))
  }

  return (
    <div>
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <form onSubmit={handleSubmit}>

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

        <label htmlFor="character">
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
      <main>
        <ul>
          {renderPhrases()}
        </ul>

        <h2>Añadir una nueva frase</h2>
        <label htmlFor="user-add-phrase">
          <input 
          type="text" 
          name="quote" 
          id="user-add-phrase"
          value={newPhrase.quote}
          onChange={handleInput}
          />
        </label>
        <label htmlFor="user-add-character">
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
      </main>
    </div>
  )
}

export default App;

