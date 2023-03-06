import React, {useState, useEffect} from 'react'
import './WordsForm.css'

/* Form collects all the words and passes data object to the parent component*/

const WordsForm = ({ getWords }) => {
    const INITIAL_STATE = {
        name:"",
        adjective:"",
        noun1:"",
        verb:"",
        noun2:""
    }
    const [data, setData] = useState(INITIAL_STATE)
    const [disabled, setDisabled] = useState(true)

    //Checks if all the fields are filled to enable the submit button 
    useEffect(() => {
        if (Object.values(data).indexOf("") === -1) {
            setDisabled(false)
        } else setDisabled(true)
    }, [data])

    const handleChange = e => {
        const { name, value } = e.target
        setData(data => ({
            ...data,
            [name]: value
        }))
        
    }

    const handleSubmit = e => {
        e.preventDefault()
        getWords(data)
        setData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit} className="WordsForm">
            <label htmlFor="name"></label>
            <input id="name" type="text" 
                   placeholder="name" name="name"
                   value={data.name} onChange={handleChange}></input>
            <label htmlFor="adjective"></label>
            <input id="adjective" type="text" 
                   placeholder="adjective" name="adjective"
                   value={data.adjective} onChange={handleChange}></input>
            <label htmlFor="noun1"></label>
            <input id="noun1" type="noun1" 
                   placeholder="noun 1" name="noun1"
                   value={data.noun1} onChange={handleChange}></input>
            <label htmlFor="verb"></label>
            <input id="verb" type="verb" 
                   placeholder="verb" name="verb"
                   value={data.verb} onChange={handleChange}></input>
            <label htmlFor="noun2"></label>
            <input id="noun2" type="text" 
                   placeholder="noun 2" name="noun2"
                   value={data.noun2} onChange={handleChange}></input>
            <button disabled={disabled}>Get a Story</button>
        </form>
    ) 
}

export default WordsForm