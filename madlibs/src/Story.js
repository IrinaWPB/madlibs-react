import React from 'react'

/* Story component takes props(array of words and playAgain function) and renders
   created story and "Restart" button */

const Story = ({words, playAgain}) => {
    return (
        <div className='Story'>
            <h2>Your Story</h2>
            <p>Please, excuse {words[0]} who is far too {words[1]} to attend {words[2]} class and wants to {words[3]} and play with a {words[4]}. </p>
            <button onClick={playAgain} className="Story-btn">Restart</button>
        </div>
    )
}
export default Story