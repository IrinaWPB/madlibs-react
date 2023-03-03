import React, { useState } from 'react'
import WordsForm from './WordsForm'
import Story from './Story'

/*Top level component renders form component if no words 
        or Story component when words are submitted*/    
const Madlib = () => {
    const [words, setWords] = useState([])

    //function gets words passed from form 
    const getWords = (data) => {
        setWords(Object.values(data))
    }

    //restarts a game by resetting state to empty array
    const playAgain = () => {
        setWords([])
    }

    return (
        <div className="Madlib">
            <h1>Madlibs</h1>
            {(words.length === 0) ? 
            <WordsForm getWords={getWords}/> : 
            <Story words={words} playAgain={playAgain}/>}
        </div>
    )
}

export default Madlib