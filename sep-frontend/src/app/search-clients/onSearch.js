import {ChangeEvent, useCallback, useState} from "react";

const onSearch = () => {
    const [events, setEvents] = useState(undefined)
    const [text, setText] = useState("");
    const [error, setError] = useState(false)
    // http://localhost:3000/events?search=K
    const searchCallback = useCallback(async (event) => {
        setText(event.target.value)
        try{
            await fetch(`http://localhost:3000/events?search=${event.target.value}`)
            .then((res) => res.json())
            .then((res) => {
                console.log("events", res.data.events)
                setEvents(res.data.events)
                setError(false)
              })
        } catch {
            setError(true)
            setEvents(undefined)
        }
    }, [])

    return {searchCallback, events, text, error}
    
}

export default onSearch;
