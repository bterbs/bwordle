import { useState } from 'react';
import './GridRow.css';

export const GridRow = () => {
    const [state, setState] = useState({
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: '',
    })
    function handleChange(event) {
        const val = event.target.value
        setState({
            ...state,
            [event.target.name]: val
        })
    }
    return (
        <form>
        <label htmlFor="first" hidden>first field</label>
        <input
            id="first"
            type="text"
            name="first"
            className="grid-tile"
            value={state.first}
            maxLength={1}
            onChange={handleChange}
            />
        <label htmlFor="second" hidden>second field</label>
        <input
            id="second"
            type="text"
            name="second"
            className="grid-tile"
            value={state.second}
            maxLength={1}
            onChange={handleChange}
            />
        <label htmlFor="third" hidden>third field</label>
        <input
            id="third"
            type="text"
            name="third"
            className="grid-tile"
            value={state.third}
            maxLength={1}
            onChange={handleChange}
            />
        <label htmlFor="fourth" hidden>fourth field</label>
        <input
            id="fourth"
            type="text"
            name="fourth"
            className="grid-tile"
            value={state.fourth}
            maxLength={1}
            onChange={handleChange}
            />
        <label htmlFor="fifth" hidden>fifth field</label>
        <input
            id="fifth"
            type="text"
            name="fifth"
            className="grid-tile"
            value={state.fifth}
            maxLength={1}
            onChange={handleChange}
            />
        </form>
    )
}