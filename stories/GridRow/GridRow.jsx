import { useState } from 'react';

export default function GridRow({rowNumber}) {
    const [state, setState] = useState({
        'letter-1': '',
        'letter-2': '',
        'letter-3': '',
        'letter-4': '',
        'letter-5': '',
    })

    let letters = state['letter-1'] + state['letter-2'] + state['letter-3'] + state['letter-4'] + state['letter-5'];

    function handleChange(event) {
        const numOfFields = 5;
        const { maxLength, value, name } = event.target;
        const [fieldName, fieldIndex] = name.split("-");

        // Check if they hit the max character length
        if (value.length >= maxLength) {
            // Check if it's not the last input field
            if (parseInt(fieldIndex, 10) < 5) {
                // Get the next input field
                const nextSibling = document.querySelector(
                `.letter-${parseInt(fieldIndex, 10) + 1}`
                );

                // If found, focus the next field
                if (nextSibling !== null) {
                    nextSibling.focus();
                }
            }
        }
        setState({
            ...state,
            [name]: value,
        })
    }

    return (
        <div className="game-row" letters={letters} rowNumber={rowNumber}>
            <label htmlFor="first" hidden>first field</label>
            <input
                id="first"
                type="text"
                name="letter-1"
                className="grid-tile letter-1"
                value={state['letter-1']}
                maxLength={1}
                onChange={handleChange}
                required
                />
            <label htmlFor="second" hidden>second field</label>
            <input
                id="second"
                type="text"
                name="letter-2"
                className="grid-tile letter-2"
                value={state['letter-2']}
                maxLength={1}
                onChange={handleChange}
                required
                />
            <label htmlFor="third" hidden>third field</label>
            <input
                id="third"
                type="text"
                name="letter-3"
                className="grid-tile letter-3"
                value={state['letter-3']}
                maxLength={1}
                onChange={handleChange}
                required
                />
            <label htmlFor="fourth" hidden>fourth field</label>
            <input
                id="fourth"
                type="text"
                name="letter-4"
                className="grid-tile letter-4"
                value={state['letter-4']}
                maxLength={1}
                onChange={handleChange}
                required
                />
            <label htmlFor="fifth" hidden>fifth field</label>
            <input
                id="fifth"
                type="text"
                name="letter-5"
                className="grid-tile letter-5"
                value={state['letter-5']}
                maxLength={1}
                onChange={handleChange}
                required
                />
        </div>
    )
}